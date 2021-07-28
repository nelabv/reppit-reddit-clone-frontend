import styled from 'styled-components';

export const BannerContainer = styled.section`
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