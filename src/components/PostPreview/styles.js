import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../styling/utility";


export const PostPreviewContainer = styled.div`
      display: flex;
      border: 1px solid ${COLORS.gray1};
      margin-bottom: 1em;
      padding: 1.25em;
      background-color: white;

      &:hover {
        border: 1px solid ${COLORS.gray2};
      }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;

  .author-category {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      color: inherit;
    }
    
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

  .body-preview {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 45em;
  }
`;

/* export const Post = styled(_Post)`
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
`; */

