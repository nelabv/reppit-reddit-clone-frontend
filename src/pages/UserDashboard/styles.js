import styled from "styled-components";
import { GrayBackground as GrayBg, MaxWidth as Max } from "../../styling/containers";
import { PrimaryButton } from "../../styling/buttons";
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

  h3 {
    margin-bottom: 1em;

    span {
      font-size: inherit;
      color: ${COLORS.violet};
    }
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