import styled from 'styled-components';
import { COLORS } from './styles';

export const PrimaryButton = styled.button`
  background-color: ${COLORS.orange};
  min-width: 8em;
  color: white;
  font-size: 0.9em;
  padding: 0.5em;
  outline: 0;
  border: 1px solid ${COLORS.orange};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.lightOrange};
    border: 1px solid ${COLORS.lightOrange};
    color: white;
  }
`;


export const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color: ${COLORS.orange};
  border: 1px solid ${COLORS.orange};
`;