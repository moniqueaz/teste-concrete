import styled, { keyframes, css } from 'styled-components';

export const Component = styled.button`
  width: ${props =>
    props.size === 'small'
      ? '50px'
      : props.size === 'normal'
      ? '100px'
      : '150px'};
  height: 50px;
  color: ${props => props.color}
  background-color: ${props => props.bgColor};
  transition: all .1s;

  &:active{
    opacity: .8;
    transition: all .3s;
  }
`;
