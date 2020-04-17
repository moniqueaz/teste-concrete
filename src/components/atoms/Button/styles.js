import styled, { keyframes, css } from 'styled-components';

export const Component = styled.button`
  width: 100px;
  height: 50px;
  color: ${props => props.color}
  background-color: ${props => props.bgColor};
`;
