import styled from "styled-components";
import PlayerX from "/images/icon-x.svg";
import PlayerO from "/images/icon-o.svg";
import PlayerXOut from "/images/icon-x-outline.svg";
import PlayerOOut from "/images/icon-o-outline.svg";
import { useEffect, useState } from "react";

interface BoardProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  reset: boolean;
  scores: { x: number; o: number; ties: number };
  setScores: React.Dispatch<React.SetStateAction<{ x: number; o: number; ties: number }>>;
  mode: string;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  activePlayer: string;
}

function Board({
  turn,
  setTurn,
  reset,
  setScores,
  mode,
  setShowModal,
  setWinner,
  activePlayer,
}: BoardProps) {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [winningCells, setWinningCells] = useState<number[]>([]);
  const [cpuPlayer, setCpuPlayer] = useState<string>("o");

  useEffect(() => {
    setCpuPlayer(activePlayer === "x" ? "o" : "x");
  }, [activePlayer]);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      handleGameOver(winner);
    } else {
      setTurn(turn === "x" ? "o" : "x");
    }
  };

  const checkWinner = (currentBoard: string[]) => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinningCells(combo);
        return currentBoard[a];
      }
    }

    if (currentBoard.every((cell) => cell)) {
      return "tie";
    }

    return null;
  };

  const handleGameOver = (winner: string) => {
    setTimeout(() => {
      if (winner === "tie") {
        setScores((prev) => ({ ...prev, ties: prev.ties + 1 }));
      } else if (winner === "x" || winner === "o") {
        setScores((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
      }

      setWinner(winner);
      setShowModal(true);
    }, 500);
  };

  const cpuMove = () => {
    if (mode !== "solo") return;
  
    // Clone the board and find the best move using minimax
    const bestMove = findBestMove({ board, player: cpuPlayer });
    if (bestMove !== -1) {
      const newBoard = [...board];
      newBoard[bestMove] = cpuPlayer;
      setBoard(newBoard);
  
      const winner = checkWinner(newBoard);
      if (winner) {
        handleGameOver(winner);
      } else {
        setTurn(cpuPlayer === "x" ? "o" : "x");
      }
    }
  };
  
  // Minimax algorithm
  interface MinimaxParams {
    newBoard: string[];
    depth: number;
    isMaximizing: boolean;
  }

  const minimax = ({ newBoard, depth, isMaximizing }: MinimaxParams): number => {
    const winner = checkWinner(newBoard);
    if (winner === cpuPlayer) return 10 - depth; // CPU wins, subtract depth to prioritize faster wins
    if (winner === (cpuPlayer === "x" ? "o" : "x")) return depth - 10; // Player wins, prioritize CPU delay
    if (newBoard.every((cell) => cell)) return 0; // Tie

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < newBoard.length; i++) {
        if (!newBoard[i]) {
          newBoard[i] = cpuPlayer; // Simulate CPU move
          const score = minimax({ newBoard, depth: depth + 1, isMaximizing: false });
          newBoard[i] = ""; // Undo move
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      const opponent = cpuPlayer === "x" ? "o" : "x";
      for (let i = 0; i < newBoard.length; i++) {
        if (!newBoard[i]) {
          newBoard[i] = opponent; // Simulate player's move
          const score = minimax({ newBoard, depth: depth + 1, isMaximizing: true });
          newBoard[i] = ""; // Undo move
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };
  
  // Find the best move for the CPU
  interface FindBestMoveParams {
    board: string[];
    player: string;
  }

  const findBestMove = ({ board, player }: FindBestMoveParams): number => {
    let bestScore = -Infinity;
    let bestMove = -1;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = player; // Simulate CPU move
        const score = minimax({ newBoard: board, depth: 0, isMaximizing: false });
        board[i] = ""; // Undo move
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };
  

  useEffect(() => {
    if (reset) {
      setBoard(Array(9).fill(""));
      setWinningCells([]);
      setTurn("x");
    }
  }, [reset, setTurn]);

  useEffect(() => {
    if (turn === cpuPlayer && mode === "solo") {
      const timeout = setTimeout(cpuMove, 500);
      return () => clearTimeout(timeout);
    }
  }, [turn, mode, cpuPlayer]);

  return (
    <BoardContainer>
      {board.map((cell, index) => (
        <Cell
          key={index}
          $isoccupied={!!cell}
          $turn={turn}
          $isWinning={winningCells.includes(index)}
          onClick={() => handleClick(index)}
        >
          {cell && <img src={cell === "x" ? PlayerX : PlayerO} alt="player icon" />}
        </Cell>
      ))}
    </BoardContainer>
  );
}

export default Board;

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 24px;
  margin-bottom: 20px;
`;

interface CellProps {
  $isoccupied: boolean;
  $turn: string;
  $isWinning: boolean;
}

const Cell = styled.div<CellProps>`
  width: 96px;
  height: 96px;
  padding: 24px 28px 32px;
  border-radius: 10px;
  box-shadow: inset 0 -8px 0 0 #10212a;
  background-color: #1f3641;
  position: relative;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
  }

  ${({ $isoccupied, $turn }) =>
    !$isoccupied &&
    `&:hover::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background-image: url(${$turn === "x" ? PlayerXOut : PlayerOOut});
      background-size: cover;
      opacity: 0.5;
    }`}

  ${({ $isWinning }) =>
    $isWinning &&
    `
      box-shadow: 0 0 10px #ffd700;
      background-color: #ffeb3b;
    `}
`;
