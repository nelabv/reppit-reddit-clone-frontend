import styled from "styled-components";
import {
  BREAKPOINTS
} from "../../styling/";

export const GridContainer = styled.div`
  display: grid; 
  grid-template-columns: 2fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 10px 0px; 
  grid-template-areas: 
    "posts-container sidebar-container";
  margin: 1em auto;
  padding: 3em 15vw;

  @media (${BREAKPOINTS.desktops}) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
  }
`;

export const HomeContainer = styled.div`
  height: 100%,
  width: 100vw;

  
  @media (${BREAKPOINTS.tablets2}) {
    flex-direction: column;
    padding-top: 3em;
  }
`;