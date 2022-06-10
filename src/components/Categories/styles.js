import styled from "styled-components";
import { COLORS } from "../../styling/utility";

export const CategoriesContainer = styled.div`
  background-color: white;
  margin-bottom: 1em;
  padding: 1em;
  
  span {
    font-weight: 600;
    color: ${COLORS.violet};
    margin-bottom: 0.5em;
    display: block;
  }
`;

export const Category = styled.div`
  background-color: white;
  padding: 1em 0;
  border-bottom: 1px solid ${COLORS.gray1};

  a {
    font-weight: 600;
    font-size: 0.85em;  
    color: inherit;
  }
`;