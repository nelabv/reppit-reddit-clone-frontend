import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../styling/";

export const ContentHolder = styled.div`
  background-color: white;
  margin: 4em 15% ;
  height: 100%;

  span {
    font-size: 1.5em;
    font-weight: 600;
    color: ${COLORS.redOrange};
  }

  p {
    width: 50%;
    margin-bottom: 1em;

    @media (${BREAKPOINTS.tablets2}){
      width: 100%;
    }

    @media (${BREAKPOINTS.tablets2}){
      width: 100%;
    }
  }

  @media (${BREAKPOINTS.tablets2}){
    margin: 4em 5%;
  }`;

export const LinkBtn = styled.a`
  background-color: #FF595E;
  text-decoration: none;
  color: white;
  padding: 0.25em 1.5em;
  outline: 0;
  border: 1px solid #FF595E;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8em;

  &:hover {
    background-color: #FF7B7F;
    border: 1px solid #FF7B7F;
    color: white;
  }

  @media (${BREAKPOINTS.desktops}) {
    margin-top: 1em;
  }

  @media (${BREAKPOINTS.tablets2}) {

  }
`;