import styled from "styled-components";
import { 
  FormContainer as Container, 
  CenterAlign as _CenterAlign ,
  Form as _Form
} from "../../styling/";

export const FormContainer = styled(Container)`
`;

export const CenterAlign = styled(_CenterAlign)``;

export const Form = styled(_Form)`
  label {
    font-weight: 400;
    margin: 0;
  }

  input {
    margin-bottom: 1em;
  }
`;