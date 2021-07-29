import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { Button as _Button, COLORS, BREAKPOINTS } from "../../styling/";

export const Menu = styled(AiOutlineMenu)`
  color: white;
  margin-left: 1em;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  padding: 1em 15vw;
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
`;

export const Button = styled(_Button)`
  margin-left: 1em;
  font-size: 0.8em;
`;