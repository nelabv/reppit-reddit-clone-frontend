import styled from "styled-components";
import { Button as _Button, COLORS, BREAKPOINTS } from "../../styling/";

export const PopupMenu = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20%;
  right: 0;
  height: 100%;
  background-color: #f9f9f9;
`;

export const BackgroundPopup = styled(PopupMenu)`
  left: 0;
  background-color: rgba(137, 137, 137, 0.2);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15%;
  background-color: ${COLORS.black};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  img {
    max-height: 30px;
  }

  .logo-svg {
    margin: 0;
    padding: 0;
    max-width: 70%;
    height: auto;
  }

  a {
    order: 1;
    padding: 1em 0 0.5em 0;
    margin: 0;
  }

  .actions-container {
    order: 2;
  }

  @media (${BREAKPOINTS.tablets2}) {
    padding: 0 5%;
  }
`;

export const Button = styled(_Button)``;