import styled from "styled-components";
import { BannerContainer, BREAKPOINTS } from "../../styling";

export const Banner = styled(BannerContainer)`
  padding: 10vh 15% 5vh 15%;

  .thread-tag {
    font-size: 1.777rem;
    color: white;
    margin: 0.75em 0;
    font-weight: 600;
  }

  @media (${BREAKPOINTS.tablets2}) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const Container = styled.div`
  padding: 3em 15%;
  background-color: white;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 3em 5%;
  }
`;
