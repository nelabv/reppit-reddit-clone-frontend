import styled from "styled-components";
import { BREAKPOINTS } from "../../styling/";

export const Container = styled.div`
  padding: 3em 15%;
  background-color: #f9f9f9;

  @media (${BREAKPOINTS.tablets2}) {
    padding: 3em 5%;
  }  
`;