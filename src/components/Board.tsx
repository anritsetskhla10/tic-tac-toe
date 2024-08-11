import styled from "styled-components";
import PlayerX from "/images/icon-x.svg";
import PlayerO from "/images/icon-o.svg";
import PlayerXOut from "/images/icon-x-outline.svg";
import PlayerOOut from "/images/icon-o-outline.svg";
import { useState } from "react";

interface BoardProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
}

function Board({ turn, setTurn }: BoardProps) {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));

  const handleClick = (index: number) => {
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    setTurn(turn === "x" ? "o" : "x");
  };

  return (
    <BoardContainer>
      {board.map((cell, index) => (
        <Cell
          key={index}
          $isoccupied={!!cell}
          $turn={turn}
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
    `
    &:hover::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background-image: url(${ $turn === "x" ? PlayerXOut : PlayerOOut });
      background-size: cover;
      opacity: 0.5;
    }
  `}
`;
