import styled from "styled-components";
import { 
  COLORS
} from "../../styling/utility";
import { GradientBackground as Gradient, MaxWidth as Max } from "../../styling/containers";

export const GradientBackground = styled(Gradient)`
    padding: 5em 1em 1em 1em;
`;

export const MaxWidth = styled(Max)`
    background-color: white;
    width: 100%;
    min-height: 90vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 3em 1em;

    h2 {
      color: ${COLORS.orange};
      margin-bottom: 0.5em;
    }
`;