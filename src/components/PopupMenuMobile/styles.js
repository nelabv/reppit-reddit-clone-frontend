import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../styling/";
import { AiOutlineCloseCircle, AiOutlineUser } from "react-icons/ai";

export const PopupMenu = styled.div`
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20%;
  right: 0;
  padding: 20% 5%;

  .content-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: pink;

    span {
      font-weight: 600;
    }
  }
`;

export const Background = styled.div`
  background-color: rgba(137, 137, 137, 0.2);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
