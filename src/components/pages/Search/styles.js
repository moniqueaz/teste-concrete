import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  max-width: 750px;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);

  @media (min-width: 1024px) {
    top: 50%;
  }
`;
