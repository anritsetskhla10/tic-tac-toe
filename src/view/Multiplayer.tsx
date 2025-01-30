import Board from "../components/Board"
import Navigation from "../components/Navigation"
import Result from "../components/Result"
import SoloContainer from "../components/SoloContainer"

interface MultiplayerProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  reset: boolean;
  scores: { X: number; O: number; ties: number };
  setScores: React.Dispatch<React.SetStateAction<{ X: number; O: number; ties: number }>>;
  handleReset: () => void;
  mode: string;
  activePlayer: string;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  cpuPlayer: string;
}

function Multiplayer({ turn, setTurn, reset, scores, setScores, handleReset, mode, activePlayer, setShowModal, setWinner, cpuPlayer}: MultiplayerProps) {

  console.log(mode);
  return (
    <SoloContainer>
    <Navigation turn={turn} onReset={handleReset} />
    <Board
        turn={turn}
        setTurn={setTurn}
        reset={reset}
        scores={scores}
        setScores={setScores}
        mode={mode}
        setShowModal={setShowModal}
        setWinner={setWinner}
        activePlayer={activePlayer}
        cpuPlayer={cpuPlayer}
      />
      <Result scores={scores} activePlayer={activePlayer} mode={mode} />
  </SoloContainer>
  )
}

export default Multiplayer
