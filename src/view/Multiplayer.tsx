import Board from "../components/Board"
import Navigation from "../components/Navigation"
import Result from "../components/Result"
import SoloContainer from "../components/SoloContainer"

interface MultiplayerProps {
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
}

function Multiplayer({ turn, setTurn }: MultiplayerProps) {
  return (
    <SoloContainer>
    <Navigation turn={turn} />
    <Board turn={turn} setTurn={setTurn} />
    <Result />
  </SoloContainer>
  )
}

export default Multiplayer
