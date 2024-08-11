import styled from "styled-components"


function Result() {
  return (
    <ResultContainer>
      <div className="player1">
        <span>X ({})</span>
        <p>0</p>
      </div>
      <div className="result">
        <span>TIES</span>
        <p>0</p>
      </div>
      <div className="player2">
        <span>O ({})</span>
        <p>0</p>
      </div>
    </ResultContainer>
  )
}

export default Result



const ResultContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 0 24px;


  .player1{
    width: 96px;
    height: 64px;
    padding: 12px 0;
    border-radius: 15px;
    background-color: #31c3bd;
    text-align: center;
  }

  .result{
    width: 96px;
    height: 64px;
    padding: 12px 0;
    border-radius: 15px;
    background-color: #a8bfc9;
    text-align: center;
  }

  .player2{
    width: 96px;
    height: 64px;
    padding: 12px 0;
    border-radius: 15px;
    background-color: #f2b137;
    text-align: center;
  }
`