import styled from "styled-components";
import { AiOutlineHourglass } from "react-icons/ai";
import {
  COLORS
} from "../../styling/";

export const HourglassIcon = styled(AiOutlineHourglass)`
  color: ${COLORS.redOrange};
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.lightGray};

  .content-wrapper {
    background-color: white;
    padding: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${COLORS.borderGray};
    border-radius: 3px;
  }
`;