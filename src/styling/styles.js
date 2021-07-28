import styled from "styled-components";

export const COLORS = {
  redOrange: "#FF595E",
  yellow: "#FFCA3A",
  borderGray: "#EDEDED",
  lightGray: "#FFF3F4",
  black : "#252129"
}

export const BREAKPOINTS = {
  smartphones1 : "min-width: 320px",  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  smartphones2 : "min-width: 480px",  /* smartphones, Android phones, landscape iPhone */
  tablets1 : "min-width: 600px",      /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  tablets2 : "min-width: 801px",      /* tablet, landscape iPad, lo-res laptops ands desktops */
  desktops : "min-width: 1025px",     /* big landscape tablets, laptops, and desktops */
  hi_res : "min-width:1281px"          /* hi-res laptops and desktops */ 
}

export const BorderedContainer = styled.div`
  display: flex;
  border: 1px solid #ededed;
  border-radius: 3px;
  margin-bottom: 1em;
  padding: 20px;
  background-color: white;

 &:hover {
    border: 1px solid #D1D1D1;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2em;

  label {
    font-size: 0.75rem;
  }

  input {
    border: 1px solid #dedede;
    border-radius: 3px;
    padding: 10px 3px;
  }

  input:focus {
    border: 1px solid #df5d2e;
    outline: none;
  }

  select {
    width: 150px;
    border: 1px solid #dedede;
    border-radius: 3px;
    margin-bottom: 1em;
  }

  select:focus {
    border: 1px solid #df5d2e;
  }
`;

export const Button = styled.button`
  background-color: #FF595E ;
  color: white;
  padding: 0.25em 1.5em;
  outline: 0;
  border: 1px solid #FF595E;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #FF7B7F;
    border: 1px solid #FF7B7F;
    color: white;
  }
`;
