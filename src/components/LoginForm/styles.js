import styled from "styled-components";
import { 
  FormContainer as Container, 
  CenterAlign as _CenterAlign ,
  Form as _Form,
  COLORS
} from "../../styling/";

export const FormContainer = styled(Container)`
`;

export const CenterAlign = styled(_CenterAlign)`
  .subtext {
    color: ${COLORS.gray};
    font-size: 1.563rem;
  }
`;

export const Form = styled(_Form)`
  label {
    font-weight: 400;
    margin: 0;
  }

  input {
    margin-bottom: 1em;
  }
`;