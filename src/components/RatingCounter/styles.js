import styled from "styled-components";
import { AiOutlineCaretUp } from 'react-icons/ai';
import { AiOutlineCaretDown } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.5em;
`;

export const UpArrow = styled(AiOutlineCaretUp)`
  transition-duration: 0s;
  cursor: pointer;
  color: ${props => props.upvotecolor === "true" ? "#63E821" : "black" };
`;

export const DownArrow = styled(AiOutlineCaretDown)`
  transition-duration: 0s;
  cursor: pointer;
  color: ${props => props.downvotecolor === "true" ? "#C2595C" : "black" };
`;