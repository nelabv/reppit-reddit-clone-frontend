import styled from "styled-components";
import { COLORS } from "../../styling/utility";

export const Container = styled.div`
  width: 100%;

  h3 {
      color: ${COLORS.violet};
  }

  .category {
    font-weight: 600;
    margin-bottom: 1em;
    display: block;
  }

  p {
    margin: 1em 0;
  }
`;