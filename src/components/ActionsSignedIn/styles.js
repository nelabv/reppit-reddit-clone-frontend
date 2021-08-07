import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { Button as _Button, COLORS, BREAKPOINTS } from "../../styling/";

export const Container = styled.div`
  display: flex;

  .actions {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-welcome {
      font-weight: 600;
      color: ${COLORS.redOrange};
      margin: 0 5px;
    }

    @media (${BREAKPOINTS.tablets2}) {
      display: none;
    }
  }
`;

export const Button = styled(_Button)`
  margin-left: 1em;
  font-size: 0.8em;
`;

export const Menu = styled(AiOutlineMenu)`
  display: none;

  @media (${BREAKPOINTS.tablets2}) {
    display: inline-block;
    color: white;
    margin-left: 1em;
  }
`;