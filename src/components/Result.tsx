import styled from "styled-components";

interface ResultProps {
  scores: {
    x: number;
    o: number;
    ties: number;
  };
  mode: string; 
  activePlayer: string; 
}

function Result({ scores, mode, activePlayer }: ResultProps) {
  const player1Label = mode === "solo" ? (activePlayer === "X" ? "YOU" : "CPU") : "P1";
  const player2Label = mode === "solo" ? (activePlayer === "O" ? "YOU" : "CPU") : "P2";


  return (
    <ResultContainer>
      <div className="player1">
        <span>X ({player1Label})</span>
        <p>{scores.x}</p>
      </div>
      <div className="result">
        <span>TIES</span>
        <p>{scores.ties}</p>
      </div>
      <div className="player2">
        <span>O ({player2Label})</span>
        <p>{scores.o}</p>
      </div>
    </ResultContainer>
  );
}

export default Result;

const ResultContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 0 24px;

  div {
    width: 96px;
    height: 64px;
    padding: 12px 0;
    border-radius: 15px;
    text-align: center;
    color: #ffffff;

    &.player1 {
      background-color: #31c3bd;
    }

    &.result {
      background-color: #a8bfc9;
    }

    &.player2 {
      background-color: #f2b137;
    }

    span {
      font-size: 12px;
      font-weight: bold;
    }

    p {
      font-size: 24px;
      margin: 0;
    }
  }
`;
