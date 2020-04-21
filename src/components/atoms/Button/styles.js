import styled, { css } from 'styled-components';

export const Component = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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

  ${props =>
    props.disabled &&
    css`
      background-color: #5c5c5c;
      pointer-events: none;
    `}

  &:active{
    opacity: .8;
    transition: all .3s;
  }
`;
