import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { COLORS, BREAKPOINTS, PrimaryButton as _PrimaryButton } from "../../styling/";

export const Menu = styled(AiOutlineMenu)`
  color: white;
`;

export const Nav = styled.nav`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .items-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
  }

  .mobile-menu-container {
    display: none;
  
    span {
      margin-right: 0.5em;
    }

    .user-tag {
      color: ${COLORS.redOrange};
      font-weight: 600;
    }
  }

  @media (${BREAKPOINTS.tablets2}) {
    .items-list {
      display: none;
    }

    .mobile-menu-container {
      display: flex;
    }

  }
`;

export const Button = styled(_PrimaryButton)`
  margin-left: 1em;
`;