import styled from 'styled-components';
import { 
  BannerContainer as _Container,
  Button as _Button,
  COLORS
} from "../../styling/";

export const BannerContainer = styled(_Container)`
  .header-text {
    @media (max-width: 800px) {
      margin-bottom: 1em;
    }
  }

  .button-container {
    display: none;

    @media (max-width: 800px) {
      display: flex;
      align-items: center;
    }
  }
`;

export const SigninBtn = styled(_Button)`
`;

export const LoginBtn = styled(_Button)`
  background-color: white;
  color: ${COLORS.redOrange};
  border: 1px solid ${COLORS.redOrange};
  margin-right: 1em;
`;