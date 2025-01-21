import Board from "../components/Board";
import Navigation from "../components/Navigation";
import Result from "../components/Result";
import SoloContainer from "../components/SoloContainer";

interface SoloProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  reset: boolean;
  scores: { x: number; o: number; ties: number };
  setScores: React.Dispatch<React.SetStateAction<{ x: number; o: number; ties: number }>>;
  handleReset: () => void;
}

function Solo({ turn, setTurn, reset, scores, setScores, handleReset}: SoloProps) {


  return (
    <SoloContainer>
      <Navigation turn={turn} onReset={handleReset} />
      <Board
        turn={turn}
        setTurn={setTurn}
        reset={reset}
        scores={scores}
        setScores={setScores}
      />
      <Result scores={scores} />
    </SoloContainer>
  );
}

export default Solo;
