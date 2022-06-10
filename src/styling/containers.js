import styled from "styled-components";
import { COLORS } from "./utility";

export const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 900px;
`;

export const GradientBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: rgb(95,35,107);
    background: linear-gradient(0deg, rgba(95,35,107,1) 0%, rgba(190,55,95,1) 52%, rgba(237,133,84,1) 100%);
    padding: 8em 1em 1em 1em;
`;

export const GrayBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: ${COLORS.gray1};
`;

export const BorderedContainer = styled.div`
    display: flex;
    border: 1px solid #ededed;
    margin-bottom: 1em;
    padding: 1.25em;
    background-color: white;

    &:hover {
      border: 1px solid #D1D1D1;
    }
`;