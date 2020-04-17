import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  font-style: italic;
  font-weight: 300;
  font-size: ${props =>
    props.size === 'large'
      ? '60px'
      : props.size === 'normal'
      ? '40px'
      : '20px'};

  span {
    font-family: Monaco;
    font-style: normal;
    margin-right: 5px;
  }
`;
