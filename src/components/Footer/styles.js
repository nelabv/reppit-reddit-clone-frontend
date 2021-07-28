import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 15vw;
  height: 3em;
  background-color: #252129;
  
  span {
    color: white;
  }

  div {
    display: flex;
    align-items: center;
  }

  div a {
    text-decoration: none;
    color: white;
    margin-left: 0.5em;
  }
`;