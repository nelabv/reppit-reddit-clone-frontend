import styled from 'styled-components';
import { 
  BannerContainer as _Container,
  Button as _Button,
  COLORS,
  BREAKPOINTS
} from "../../styling/";

export const BannerContainer = styled(_Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .header-text {
    @media (${BREAKPOINTS.tablets2}) {
      margin-bottom: 1em;
    }
  }

  @media (${BREAKPOINTS.tablets2}) {
    padding: 10em 5% 2em 5%;
  }
`;

export const SigninBtn = styled(_Button)`
  background-color: ${COLORS.black};
  border: 1px solid ${COLORS.black};
  padding: 1em 3em;

  &:hover {
    background-color: ${COLORS.muteBlack};
    border: 1px solid ${COLORS.muteBlack};
  }
`;