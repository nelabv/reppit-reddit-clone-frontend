import styled from "styled-components";

export const COLORS = {
  redOrange: "#FF595E",
  yellow: "#FFCA3A",
  borderGray: "#EDEDED",
  lightGray: "#F5F5F5",
  black : "#252129",
  gray: "#9B9B9B",
  muteBlack: "#505050"
}

export const BREAKPOINTS = {
  smartphones1 : "max-width: 320px",  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  smartphones2 : "max-width: 480px",  /* smartphones, Android phones, landscape iPhone */
  tablets1 : "max-width: 600px",      /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
  tablets2 : "max-width: 801px",      /* tablet, landscape iPad, lo-res laptops ands desktops */
  desktops : "max-width: 1025px",     /* big landscape tablets, laptops, and desktops */
  hi_res : "max-width:1281px"         /* hi-res laptops and desktops */ 
}

export const BorderedContainer = styled.div`
  display: flex;
  border: 1px solid #ededed;
  border-radius: 3px;
  margin-bottom: 1em;
  padding: 1.25em;
  background-color: white;

 &:hover {
    border: 1px solid #D1D1D1;
  }
`;

export const FormContainer = styled.div`
  background-color: #f3f3f3;
  position: absolute;
  top: 3em;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  @media (${BREAKPOINTS.tablets2}) {
    background-color: white;
  }
`;

export const CenterAlign = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  width: 50%;
  border-radius: 3px;
  border: 1px solid #d9d9d9;
  margin-top: 2em;
  padding: 3em;

  @media (${BREAKPOINTS.tablets2}) {
    margin: 1em 0;
    padding: 0;
    border: none;
  }

  .header-text {
    color: #df5d2e;
    font-size: 3.157rem;
    font-weight: 600;
  }

  @media (${BREAKPOINTS.tablets2}) {
    width: 90%;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 2em 0;

  label {
    font-weight: 600;
    font-size: 0.8em;
    margin-bottom: 0.5em;
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

  button {
    background-color: #FF595E;
    color: white;
    padding: 0.25em 1.5em;
    outline: 0;
    border: 1px solid #FF595E;
    border-radius: 3px;
    cursor: pointer;
    width: 25%;
  
    &:hover {
      background-color: #FF7B7F;
      border: 1px solid #FF7B7F;
      color: white;
    }

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  span {
    color: ${COLORS.redOrange};
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

  @media (${BREAKPOINTS.desktops}) {
    margin-top: 1em;
  }

  @media (${BREAKPOINTS.tablets2}) {
    margin-top: 0;
    padding: 1em 0;
  }
`;

export const Input = styled.input`
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 10px 3px;

  &:focus {
    border: 1px solid #df5d2e;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  height: 20em;
  resize: none;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 10px 3px;
  margin-bottom: 2em;

  &:focus {
    border: 1px solid #df5d2e;
    outline: none;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  .author-category {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media (${BREAKPOINTS.tablets2}) {
      flex-direction: column;
      align-items: flex-start;
    }

    .category {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
      margin-right: 2em;
      border-bottom: 0;
    }

    .author {
      font-size: 0.8rem;
      color: #7C7C7C;
    }
  }

  h3 {
    text-decoration: none;
    font-size: 1.333rem;
    color: black;
    margin: 0.5rem 0;
  }

  .comments-length {
    font-size: 0.8rem;
    margin: 0.5em 0;
  }
`;

export const BannerContainer = styled.div`
  display: ${props => props.user ? "none" : null};
  background: rgb(255,89,94);
  background: linear-gradient(90deg, rgba(255,89,94,1) 0%, rgba(255,202,58,1) 100%);
  padding: 25vh 15vw 5vh 15vw;
  position: relative;
  overflow: hidden;
  max-height: 1000px;

  h1 {
    color: white;
  }

  span {
    color: white;
    font-size: 1.333rem;
  }
`;
