import styled from "styled-components";
import { COLORS } from "./styles";
import { PrimaryButton } from "./buttons";

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 2em 0;
`;

export const FormLabel = styled.label`
    font-weight: 600;
    font-size: 0.8em;
    margin-bottom: 0.5em;
    color: ${COLORS.violet};

    &:focus {
      border: 1px solid #df5d2e;
    }
`;

export const FormSelect = styled.select`
    width: 150px;
    border: 1px solid #dedede;
    border-radius: 3px;
    margin-bottom: 1em;

    &:focus {
      border: 1px solid #df5d2e;
    }
`;

export const FormInput = styled.input`
    border: 1px solid #dedede;
    padding: 0.5em;
    margin-bottom: 1.5em;

    &:focus {
        border: 1px solid ${COLORS.violet};
        background-color: ${COLORS.gray2};
    }
`;

export const FormButton = styled(PrimaryButton)`
    max-width: 5em;
`;

export const FormTextarea = styled.textarea`
  height: 20em;
  resize: none;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 0.5em;
  margin-bottom: 1em;

  &:focus {
    border: 1px solid #df5d2e;
    outline: none;
  }
`;

export const PasswordVisibility = styled.span`
  font-size: 0.95em;
  margin-bottom: 1em;
`;