import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 10px 16px 0;

  @media(min-width: 1024px){
    max-width: 1152px
    padding: 35px 25px 0;
  }
`;

export const Content = styled.div`
  margin-top: 20px;

  @media (min-width: 1024px) {
    margin-top: 53px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Section = styled.div`
  & + div {
    margin-top: 30px;
  }
  @media (min-width: 1024px) {
    margin-top: 0 !important;
    width: auto;
    & + div {
      flex: 0 1 750px;
      background-color: yellow;
    }
  }
`;

export const Header = styled.div`
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
