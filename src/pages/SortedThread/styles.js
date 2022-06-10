import styled from "styled-components";
import { PrimaryButton } from "../../styling/buttons";
import { GrayBackground as GrayBg, MaxWidth as Max } from "../../styling/containers";
import { COLORS } from "../../styling/utility";


export const GrayBackground = styled(GrayBg)`
  padding: 1em;
`;

export const MaxWidth = styled(Max)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  padding: 0 1em;
  padding-top: 7em;

  h3 {
    margin-bottom: 1em;

    span {
      font-size: inherit;
      color: ${COLORS.violet};
    }
  }
`;

export const CategoryBanner = styled.div`
  background: ${COLORS.violet};
  margin-bottom: 1em;
  height: 5em;
  display: flex; 
  justify-content: flex-start;
  align-items: center;
  padding: 1em;
  
  span {
    color: white;
    font-weight: 600;
  }
`;

export const WritePostBtn = styled(PrimaryButton)`
  a {
    text-decoration: none;
    color: white;
  }

  width: 100%;
  margin-bottom: 2em;
`;
