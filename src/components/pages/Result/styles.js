import styled, { keyframes, css } from 'styled-components';

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
  background-color: yellow;
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
