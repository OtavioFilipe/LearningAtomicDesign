import styled from "styled-components";
import { InputType } from "./i-input";


export const Container = styled.input<InputType>`
  background: ${ prop => prop.background || 'silver' };
`;