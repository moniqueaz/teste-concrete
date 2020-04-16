import styled, { keyframes, css } from 'styled-components';

export const ContainerButton = styled.button.attrs({ color, size })`
  ${color && css``}
  ${size && css``}
`;
