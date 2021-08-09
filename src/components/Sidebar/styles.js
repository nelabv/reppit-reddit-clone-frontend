import styled from "styled-components";
import { 
  Button as _Button,
  BorderedContainer as _BorderedContainer,
  BREAKPOINTS
} from "../../styling/";

export const SidebarContainer = styled.div`
order: 1;
  grid-area: sidebar-container;

  @media (${BREAKPOINTS.smartphones2}) {
    order: 1;
  }
`;

export const Button = styled(_Button)`
  display: ${props => props.isLoggedIn ? null : "none"};
  width: 100%;
  margin-bottom: 1em;

  @media (${BREAKPOINTS.desktops}) {
    margin-top: 1em;
  }

  @media (${BREAKPOINTS.tablets2}) {
    margin-top: 0;
    padding: 1em 0;
  }
`;

export const CategoriesBar = styled(_BorderedContainer)`
  display: flex;
  flex-direction: column;
  margin-right: 0;

  .bold-text {
    font-weight: 600;
  }
`;

export const Category = styled.div`
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #d9d9d9;
`;

export const CategoryLastRow = styled(Category)`
  border-bottom:none;
  padding-bottom: 0;
`;