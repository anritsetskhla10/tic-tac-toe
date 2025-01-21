import styled from "styled-components";

interface ResultProps {
  scores: {
    x: number;
    o: number;
    ties: number;
  };
}

function Result({ scores }: ResultProps) {
  return (
    <ResultContainer>
      <div className="player1">
        <span>X ({scores.x})</span>
        <p>{scores.x}</p>
      </div>
      <div className="result">
        <span>TIES</span>
        <p>{scores.ties}</p>
      </div>
      <div className="player2">
        <span>O ({scores.o})</span>
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
