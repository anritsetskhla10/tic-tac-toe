
import styled from "styled-components";
import PlayerX from "/images/icon-x.svg";
import PlayerO from "/images/icon-o.svg";


interface RoundModalProps {
  winner: string | null;
  onClose: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function RoundModal({ winner, onClose, setShowModal}: RoundModalProps) {

    const handleNextRound = () => {
        setShowModal(false);
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
        <WinnerDiv>
            <img
            src={winner === "x" ? PlayerX : PlayerO}
            alt="winner icon"
            />
            <h3>TAKES THE ROUND</h3>
        </WinnerDiv>
        <ButtonsContainer>
            <Button onClick={onClose}>Quit</Button>
            <Button onClick={handleNextRound}>Next Round</Button>
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index:50 ;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #1f3641;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const WinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    & img {
        width: 30px;
        height: 30px;
    }

    & h3 {
        color: #f2b137;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;
`;
