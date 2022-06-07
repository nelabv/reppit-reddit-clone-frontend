import styled from "styled-components";
import { COLORS } from "../../styling/utility";
import { MaxWidth } from "../../styling/containers";

/* export const FooterBg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 15vw;
  height: 3em;
  background-color: #252129;
  
  span {
    color: white;
  }

  div {
    display: flex;
    align-items: center;
  }

  div a {
    text-decoration: none;
    color: white;
    margin-left: 0.5em;
  }
`; */

export const FooterBg = styled.footer`
    background-color: ${COLORS.black};
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled(MaxWidth)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      order: 1;

      a {
        margin-left: 1em;
        color: white;
      }
    }

    span {
      order: 2;
      color: white;
    }
`;