import styled from "styled-components";
import { 
  Post as _Post,
  BREAKPOINTS
} from "../../styling";
import { BorderedContainer } from "../../styling/containers";

export const PostPreviewContainer = styled(BorderedContainer)`
`;

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

