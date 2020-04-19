import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  max-width: 650px;
  height: 100vh;

  .search-area {
    margin-bottom: 50%;

    @media (min-width: 1024px) {
      margin-bottom: 0;
    }
  }
`;
