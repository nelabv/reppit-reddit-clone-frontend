import styled from "styled-components";
import { COLORS, BREAKPOINTS, Button as _Button } from "../../styling/";
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";

export const PopupMenu = styled.div`
  z-index: 2;
  background-color: ${COLORS.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
  padding: 20% 5%;
  border-radius: 20px;

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-weight: 600;
      color: white;
      padding-bottom: 0.5em;
      margin-bottom: 3em;
    }
  }
`;

export const Background = styled.div`
  animation: move 0.3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;

  @keyframes move {
    from {
      top: -500px;
    }
    to {
      top: 0;
    }
  }
  background-color: rgba(137, 137, 137, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

export const CloseMenu = styled(AiOutlineCloseCircle)`
  color: ${COLORS.redOrange};
`;

export const User = styled(AiOutlineUser)`
  color: white;
  border-radius: 50%;
  padding: 1em;
  box-sizing: content-box;
  margin-bottom: 2em;
  background-color: ${COLORS.redOrange};
`;

export const Action = styled.button`
  background: transparent;
  border: none;
  color: white;
`;

export const Button = styled(_Button)`
  margin-bottom: 2em;
  width: 15em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
