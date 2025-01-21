import { Route, Routes } from "react-router";
import styled from "styled-components";
import Menu from "./view/Menu";
import Solo from "./view/Solo";
import Multiplayer from "./view/Multiplayer";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [mode, setMode] = useState("solo");
  const [turn, setTurn] = useState("x");
  const [reset, setReset] = useState(false);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });

  const handleReset = () => {
    setReset(true);
    setScores({ x: 0, o: 0, ties: 0 });
    setTimeout(() => setReset(false), 0); 
  };


  return (
    <MainContainer>
      <Routes>
        <Route
          path="/"
          element={
            <Menu
              activePlayer={activePlayer}
              setActivePlayer={setActivePlayer}
              setMode={setMode}
            />
          }
        />
        <Route
          path="/solo"
          element={
            <Solo
              turn={turn}
              setTurn={setTurn}
              reset={reset}
              scores={scores}
              setScores={setScores}
              handleReset={handleReset}
            />
          }
        />
        <Route
          path="/multiplayer"
          element={
            <Multiplayer
              turn={turn}
              setTurn={setTurn}
              reset={reset}
              scores={scores}
              setScores={setScores}
              handleReset={handleReset}
            />
          }
        />
      </Routes>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  padding: 119px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
