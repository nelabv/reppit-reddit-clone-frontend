import {
  Form as _Form,
  FormContainer as _Container,
  CenterAlign as _CenterAlign,
  Textarea as _Textarea
} from "../../styling/";
import styled from "styled-components";

export const Form = styled(_Form)`
`;

export const FormContainer = styled(_Container)`
`;

export const Textarea = styled(_Textarea)`
  margin-top: 2em;
`;

export const CenterAlign = styled(_CenterAlign)`
  align-items: flex-start;
  width: 70%;

  .header-text {
    font-size: 2.333em;
  }
`;