
import { useNavigate } from "react-router";
import MenuContainer from "../components/MenuContainer";

interface MenuProps{
    activePlayer: string,
    setActivePlayer: React.Dispatch<React.SetStateAction<string>>,
    setMode: React.Dispatch<React.SetStateAction<string>>
}

function Menu({activePlayer, setActivePlayer, setMode}:MenuProps) {

    const navigate = useNavigate();

  const handlePlayerClick = (player: "X" | "O") => {
    setActivePlayer(player);
  };

  const handleSetMode = (mode: 'solo' | "multiplayer")=>{
    setMode(mode);

    if(mode === 'solo'){
        navigate('/solo');
    }else{
        navigate('/multiplayer');
    }
  }


  return (
    <MenuContainer>
      <img src="/images/logo.svg" alt="logo icon" />
      <div className="settings">
        <h2>PICK PLAYER 1’S MARK</h2>
        <div className="player">
          <button
            className={activePlayer === "X" ? "active" : ""}
            onClick={() => handlePlayerClick("X")}
          >
            <img src="/images/icon-x.svg" alt="" />
          </button>
          <button
            className={activePlayer === "O" ? "active" : ""}
            onClick={() => handlePlayerClick("O")}
          >
            <img src="/images/icon-o.svg" alt="" />
          </button>
        </div>
        <h3>REMEMBER: X GOES FIRST</h3>
      </div>
      <div className="modeContainer">
        <button className="solo" onClick={() => handleSetMode("solo")}>NEW GAME (VS CPU)</button>
        <button className="multiplayer" onClick={() => handleSetMode("multiplayer")}>NEW GAME (VS PLAYER)</button>
      </div>
    </MenuContainer>
  );
}

export default Menu;


