import styled from "styled-components";
import { COLORS } from "../../styling/utility";

export const Container = styled.div`
  border: 1px solid ${COLORS.gray1};
  padding: 1em;
  margin: 1em 0;

  span {
    font-weight: 600;
  }
`;