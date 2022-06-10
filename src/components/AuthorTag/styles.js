import styled from "styled-components";
import { COLORS } from "../../styling/utility";

export const AuthorTagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  .circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75em;
    height: 1.75em;
    border-radius: 50%;
    margin-right: 0.25em;
    background-color: ${COLORS.orange};

    span {
      color: white;
    }
  }
`;

