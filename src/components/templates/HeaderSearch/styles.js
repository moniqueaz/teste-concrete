import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px 16px 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1152px;
    padding: 35px 25px 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header {
    &__search {
      max-width: 750px;
      flex: 0 1 100%;
    }
  }
`;

export const Content = styled.div``;
