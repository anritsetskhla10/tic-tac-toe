import Board from "../components/Board"
import Navigation from "../components/Navigation"
import Result from "../components/Result"
import SoloContainer from "../components/SoloContainer"

interface MultiplayerProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  reset: boolean;
  scores: { x: number; o: number; ties: number };
  setScores: React.Dispatch<React.SetStateAction<{ x: number; o: number; ties: number }>>;
  handleReset: () => void;
  mode: string;
  activePlayer: string;
}

function Multiplayer({ turn, setTurn, reset, scores, setScores, handleReset, mode, activePlayer}: MultiplayerProps) {

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
      />
      <Result scores={scores} activePlayer={activePlayer} mode={mode} />
  </SoloContainer>
  )
}

export default Multiplayer
