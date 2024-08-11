import Board from "../components/Board";
import Navigation from "../components/Navigation";
import Result from "../components/Result";
import SoloContainer from "../components/SoloContainer";

interface SoloProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
}

function Solo({ turn, setTurn }: SoloProps) {
  return (
    <SoloContainer>
      <Navigation turn={turn} />
      <Board turn={turn} setTurn={setTurn} />
      <Result />
    </SoloContainer>
  );
}

export default Solo;
