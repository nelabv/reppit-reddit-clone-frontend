import styled from "styled-components";
import { 
  FormContainer as Container, 
  CenterAlign as _CenterAlign ,
  Form as _Form,
  COLORS
} from "../../styling/";
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

/* export const FormContainer = styled(Container)`
`; */

/* export const CenterAlign = styled(_CenterAlign)``;

export const Form = styled(_Form)`
  label {
    font-weight: 400;
    margin: 0;
  }

  input {
    margin-bottom: 1em;
  }
`; */