import styled from 'styled-components';
import { PrimaryButton as _Primary, SecondaryButton as _Secondary } from "../../styling/buttons";
import { MaxWidth, GradientBackground as _Gradient } from '../../styling/containers';

export const GradientBackground = styled(_Gradient)``;

export const BannerContainer = styled(MaxWidth)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 1em 6em 1em;
  height: 100vh;

  h1 {
    color: white;
    margin-bottom: 0.5em;
    font-family: 'Play', sans-serif;
  }

  span {
    color: white;
    margin-bottom: 1em;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    button {
      margin-bottom: 1em;
    }
  }
`;

export const PrimaryButton = styled(_Primary)`
    padding: 1em;
`;

export const SecondaryButton = styled(_Secondary)`
    padding: 1em;
`;