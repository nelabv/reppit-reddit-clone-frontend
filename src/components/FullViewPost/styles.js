import styled from "styled-components";
import { 
  BorderedContainer, 
  Post as _Post,
  BREAKPOINTS
} from "../../styling/";

export const PostContainer = styled(BorderedContainer)`
  display: flex;
  flex-direction: column;
  margin-right: 0;
  margin-top: 1em;
  margin-right: 0;
`;

export const CommentContainer = styled(BorderedContainer)`
  display: flex;
  margin-right: 0;
  flex-direction: column;
  width: 70%;

  span {
    font-weight: 600;
    font-size: 0.75em;
    margin-bottom: 1em;
  }

  p {
    word-wrap: break-word;
  }

  @media (${BREAKPOINTS.tablets2}) {
    width: 100%;
  }
`;

export const InformationHolder = styled.div`
  display: flex;
`;

export const Post = styled(_Post)``;
