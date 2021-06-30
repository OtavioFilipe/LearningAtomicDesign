import styled from 'styled-components'
import { iButtonProps } from './iButtonProps';

export const Button = styled.button<iButtonProps>`
  color: white;
  border: none;
  background: ${ prop => prop.background || 'hotpink' };
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  :hover {
    filter: brightness(0.8);
  }
`;