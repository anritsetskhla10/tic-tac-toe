import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;

  

  .settings {
    padding: 24px 24px 30px;
    border-radius: 15px;
    box-shadow: inset 0 -8px 0 0 #10212a;
    background-color: #1f3641;

    h2{
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        text-align: center;
        color: #a8bfc9;
        margin-bottom: 24px;
    }

    h3{
        margin-top: 17px;
        opacity: 0.5;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.88px;
        text-align: center;
        color: #a8bfc9;
    }

    .player {
      padding: 9px 8px;
      border-radius: 10px;
      background-color: #1a2a33;
      display: flex;
      align-items: center;

      button {
        padding: 11px 50px;
        border: none;
        border-radius: 10px;
        background-color: transparent;
        transition: background-color 0.3s ease, filter 0.3s ease;
        cursor: pointer;

        &.active {
          background-color: #a8bfc9;
          img {
            filter: brightness(0) saturate(100%) invert(12%) sepia(84%) saturate(253%) hue-rotate(155deg) brightness(94%) contrast(94%);
          }
        }

        &:focus{
          background-color: #a8bfc9;
          img {
            filter: brightness(0) saturate(100%) invert(12%) sepia(84%) saturate(253%) hue-rotate(155deg) brightness(94%) contrast(94%);
          }
        }

        &:hover{
            background-color: rgba(168, 191, 201, 0.05);

            img{
                filter: brightness(0) saturate(100%) invert(82%) sepia(37%) saturate(0%) hue-rotate(172deg) brightness(85%) contrast(63%);
            }
        }
        }

        img {
          width: 32px;
          height: 32px;
          filter: brightness(0) saturate(100%)
            invert(74%) sepia(5%) saturate(19%)
            hue-rotate(4deg) brightness(93%) contrast(82%);
        }
      }
    }

  .modeContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;

    button{
        border: none;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
        color: #1a2a33;
        white-space: nowrap;
        cursor: pointer;
    }

    .solo{
        padding: 14px 76px 22px 78px;
        border-radius: 15px;
        box-shadow: inset 0 -8px 0 0 #cc8b13;
        background-color: #f2b137;

        &:hover{
            box-shadow: inset 0 -8px 0 0 #cc8b13;
            background-color: #ffc860;
        }
    }

    .multiplayer{
        padding: 14px 59px 22px 61px;
        border-radius: 15px;
        box-shadow: inset 0 -8px 0 0 #118c87;
        background-color: #31c3bd;

        &:hover{
            box-shadow: inset 0 -8px 0 0 #118c87;
            background-color: #65e9e4;
        }
    }
  }

`;

export default MenuContainer;