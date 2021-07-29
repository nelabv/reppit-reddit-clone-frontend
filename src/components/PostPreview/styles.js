import styled from "styled-components";
import { 
  Post as _Post,
  BorderedContainer as _BorderedContainer,
  BREAKPOINTS
} from "../../styling/";

export const Post = styled(_Post)`
  .body-preview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 45em;

    @media (${BREAKPOINTS.tablets2}) {
      max-width: 25em;
    }

    @media (${BREAKPOINTS.smartphones2}) {
      max-width: 10em;
    }
  }
`;

export const BorderedContainer = styled(_BorderedContainer)`
  margin-right: 2em;

  @media (${BREAKPOINTS.tablets2}) {
    margin-right: 0;
    order: 2;
  }
`;

