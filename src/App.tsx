import { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router";
import Menu from "./view/Menu";
import Solo from "./view/Solo";
import Multiplayer from "./view/Multiplayer";
import RoundModal from "./components/RoundModal";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [cpuPlayer, setCpuPlayer] = useState<string>("");
  const [mode, setMode] = useState("solo");
  const [turn, setTurn] = useState("X");
  const [reset, setReset] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });
  const [showModal, setShowModal] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleReset = () => {
    setReset(true);
    setScores({ X: 0, O: 0, ties: 0 });
    setTimeout(() => setReset(false), 0);
  };

  const handleCloseModal = () => {
    setReset(true);
    setShowModal(false);
    setTurn("X");
    setScores({ X: 0, O: 0, ties: 0 });
    setTimeout(() => setReset(false), 0);
    navigate("/");
  };

  
    useEffect(() => {
      // Set CPU player based on activePlayer
      if (activePlayer === "X") {
        setCpuPlayer("O"); 
      } else {
        setCpuPlayer("X"); 
      }
    }, [activePlayer]);

    console.log(activePlayer);
    console.log(cpuPlayer);

  return (
    <MainContainer>
      {showModal && (
        <RoundModal
          winner={winner}
          onClose={handleCloseModal}
          setShowModal={setShowModal}
          setReset={setReset}
        />
      )}
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
              mode={mode}
              activePlayer={activePlayer}
              cpuPlayer={cpuPlayer}
              setWinner={setWinner}
              setShowModal={setShowModal}
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
              mode={mode}
              activePlayer={activePlayer}
              setWinner={setWinner}
              setShowModal={setShowModal}
              cpuPlayer={cpuPlayer}
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
