import { useNavigate } from "react-router";
import styled from "styled-components";

interface NavigationProps {
  turn: string;
  onReset: () => void;
}



function Navigation({ turn, onReset }: NavigationProps) {

    const navigate = useNavigate();

  const openMenu = () => {
    navigate('/');
  }

  return (
    <NavContainer>
      <button>
        <img className="logo" src="/images/logo.svg" alt="logo icon" onClick={openMenu} />
      </button>
      <div>
        <img
          src={turn === "X" ? "/images/icon-x.svg" : "/images/icon-o.svg"}
          alt={`${turn.toUpperCase()} player's turn`}
        />
        <span>TURN</span>
      </div>
      <button onClick={onReset}>
        <img className="restart" src="/images/icon-restart.svg" alt="restart icon" />
      </button>
    </NavContainer>
  );
}

export default Navigation;

const NavContainer = styled.div`
  display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 64px;
    padding: 24px 24px 0;
    
    button{
        background: transparent;
        border: none;
        cursor: pointer;

        .logo{
            margin-right: 46px;
        }

        .restart{
        padding: 12.3px 12.3px 12.3px 12.3px;
        border-radius: 5px;
        box-shadow: inset 0 -4px 0 0 #6b8997;
        background-color: #a8bfc9;
        }
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 9px;
        padding: 9px 15px 13px;
        margin-right: 74px;
        border-radius: 5px;
        box-shadow: inset 0 -4px 0 0 #10212a;
        background-color: #1f3641;

        & > img{
            width: 16px;
            height: 16px;
            filter: brightness(0) saturate(100%) invert(81%) sepia(12%) saturate(5%) hue-rotate(357deg) brightness(83%) contrast(84%);
        }

        span{
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0.88px;
            color: #a8bfc9;
        }
  }
`;
