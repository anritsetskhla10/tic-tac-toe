import Board from "../components/Board";
import Navigation from "../components/Navigation";
import Result from "../components/Result";
import SoloContainer from "../components/SoloContainer";

interface SoloProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  reset: boolean;
  scores: { X: number; O: number; ties: number };
  setScores: React.Dispatch<React.SetStateAction<{ X: number; O: number; ties: number }>>;
  handleReset: () => void;
  mode: string;
  activePlayer: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<string | null>>;
  cpuPlayer: string;
}

function Solo({ turn, setTurn, reset, scores, setScores, handleReset, mode, activePlayer, cpuPlayer, setShowModal, setWinner}: SoloProps) {

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
      <Result scores={scores} activePlayer={activePlayer} mode={mode}/>
    </SoloContainer>
  );
}

export default Solo;
