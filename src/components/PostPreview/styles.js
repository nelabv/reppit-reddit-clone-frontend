import styled from "styled-components";
import { 
  Post as _Post,
  BorderedContainer as _BorderedContainer
} from "../../styling/";

export const Post = styled(_Post)`
  .body-preview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 45em;
  }
`;

export const BorderedContainer = styled(_BorderedContainer)`
  margin-right: 2em;
`;

