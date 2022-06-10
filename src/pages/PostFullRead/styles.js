import styled from "styled-components";
import { GradientBackground as Gradient, MaxWidth } from "../../styling/containers";

export const GradientBackground = styled(Gradient)`
  min-height: 90vh;
`;

export const Container = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 90vh;
  width: 100%;
  background-color: white;
`;
