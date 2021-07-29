import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { Button as _Button, COLORS, BREAKPOINTS } from "../../styling/";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

export const CloseMenu = styled(AiOutlineCloseCircle)`
  color: ${COLORS.redOrange};
`;

export const Menu = styled(AiOutlineMenu)`
  color: white;
  margin-left: 1em;
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

  .actions-signed-in {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-greet {
      display: flex;
      align-items: center;
      flex-direction: row;

      .user-tag {
        font-weight: 600;
        color: ${COLORS.redOrange};
        margin: 0 5px;
      }
    }

    @media (${BREAKPOINTS.tablets2}) {
      display:none
    }
  }

  .actions-no-user {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style-type: none;
    }

    @media (${BREAKPOINTS.tablets2}) {
      display:none
    }
  }

  .mobile-nav-logged-in {
    display: none;

    span {
      margin-right: 0.5em;
    }
    .user-tag {
      color: ${COLORS.redOrange};
      font-weight: 600;
    }

    @media (max-width: 800px) {
      display: flex;
      align-items: center;
    }
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
`;

export const Button = styled(_Button)`
  margin-left: 1em;
  font-size: 0.8em;
`;