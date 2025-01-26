
import styled from "styled-components";
import PlayerX from "/images/icon-x.svg";
import PlayerO from "/images/icon-o.svg";


interface RoundModalProps {
  winner: string | null;
  onClose: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
}

function RoundModal({ winner, onClose, setShowModal, setReset}: RoundModalProps) {

    const handleNextRound = () => {
        setShowModal(false);
        setReset(true);
        setTimeout(() => setReset(false), 0);
    }

  return (
    <ModalOverlay>
      <ModalContainer>
        <h4>
          {winner === "tie"
            ? "ROUND TIED!"
            : winner === "x"
            ? "PLAYER X WINS!"
            : "PLAYER O WINS!"}
        </h4>
       { winner !== "tie" && winner && <WinnerDiv winner={winner}>
            <img
            src={winner === "x" ? PlayerX : PlayerO}
            alt="winner icon"
            />
            <h3>TAKES THE ROUND</h3>
        </WinnerDiv>
      }
        <ButtonsContainer>
            <button className="quitBtn" onClick={onClose}>Quit</button>
            <button className="nextBtn" onClick={handleNextRound}>Next Round</button>
        </ButtonsContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default RoundModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:50 ;
`;

const ModalContainer = styled.div`
  width: 100vw;
  background-color: #1f3641;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & h4 {
    color: #a8bfc9;
  }
`;


const WinnerDiv = styled.div<{ winner: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & img {
        width: 30px;
        height: 30px;
    }

    & h3 {
        color: ${props => props.winner === "x" ? "#31c3bd" : "#f2b137"};
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

   .quitBtn{
      margin-top: 20px;
      padding: 10px 20px;
      box-shadow: inset 0 -4px 0 0 #6b8997;
      background-color: #a8bfc9;
      color: #1a2a33;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
     cursor: pointer;
   }

   .nextBtn{
      margin-top: 20px;
      padding: 10px 20px;
      box-shadow: inset 0 -4px 0 0 #cc8b13;
      background-color: #f2b137;
      color: #1a2a33;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 10px;
      cursor: pointer;
   }

`;
