import styled, { keyframes, css } from 'styled-components';

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const SectionLeft = styled.div``;

export const SectionRight = styled.div`
  width: 100%;
  flex: 0 1 100%;
  @media (min-width: 1024px) {
    max-width: 750px;
    padding-left: 20px;
  }
  @media (min-width: 1090px) {
    padding-left: 0;
  }
`;

export const Header = styled.div`
  margin-bottom: 53px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header {
    &__search {
      max-width: 750px;
      flex: 0 1 100%;
      @media (min-width: 768px) {
        margin-left: 20px;
      }
      @media (min-width: 1090px) {
        margin-left: 0;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px 16px 0;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 1152px;
    padding: 35px 25px 0;
  }
`;
