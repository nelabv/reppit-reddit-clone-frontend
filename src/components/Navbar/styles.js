import styled from "styled-components";
import { Button as _Button, COLORS } from "../../styling/";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  padding: 1em 15vw;
  background-color: ${COLORS.black};
  width: 100vw;
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
  }
`;

export const Button = styled(_Button)`
  margin-left: 1em;
  font-size: 0.8em;
`;