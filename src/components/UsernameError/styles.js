import styled from "styled-components";
import { COLORS } from "../../styling/utility";

export const Container = styled.div`
  border: 1px solid ${COLORS.red};
  padding: 1em 1em 1em 2em;
  margin-bottom: 1em;

  ul, li {
    font-size: 0.95em;

    em, b {
      font-size: inherit;
    }
  }
`;