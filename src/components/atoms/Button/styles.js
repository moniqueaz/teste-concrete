import styled, { keyframes, css } from 'styled-components';

export const Component = styled.button`
  width: 100px;
  height: 50px;
  color: ${props => props.color}
  background-color: ${props => props.bgColor};
  transition: all .1s;

  &:active{
    opacity: .8;
    transition: all .3s;
  }
`;
