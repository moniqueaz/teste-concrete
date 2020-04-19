import styled, { keyframes, css } from 'styled-components';

export const Img = styled.img`
  opacity: 0;
  event-point: none;
`;

export const ImageContainer = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: ${props => props.width}
  height: ${props => props.height}
`;
