import { useState } from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate } from "react-router";
import Menu from "./view/Menu";
import Solo from "./view/Solo";
import Multiplayer from "./view/Multiplayer";
import RoundModal from "./components/RoundModal"; 

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [mode, setMode] = useState("solo");
  const [turn, setTurn] = useState("x");
  const [reset, setReset] = useState(false);
  const [scores, setScores] = useState({ x: 0, o: 0, ties: 0 });
  const [showModal, setShowModal] = useState(false); 
  const [winner, setWinner] = useState<string | null>(null);

  const handleReset = () => {
    setReset(true);
    setScores({ x: 0, o: 0, ties: 0 });
    setTimeout(() => setReset(false), 0);
  };

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setReset(true);
    setShowModal(false);
    setTurn("x");
    setScores({ x: 0, o: 0, ties: 0 });
    setTimeout(() => setReset(false), 0);
    navigate("/");
  };

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
              setWinner={setWinner} // Pass setWinner
              setShowModal={setShowModal} // Pass setShowModal
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
              setWinner={setWinner} // Pass setWinner
              setShowModal={setShowModal} // Pass setShowModal
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
