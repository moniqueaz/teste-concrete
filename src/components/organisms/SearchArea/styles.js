import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  align-items: center;

  @media (min-width: 768px) {
    flex-direction: ${props =>
      props.orientation === 'vertical' ? 'column' : 'row'};
  }

  .search-area {
    &__logo {
      line-height: 81px;
      @media (min-width: 768px) {
        ${props =>
          props.orientation === 'vertical'
            ? 'line-height: 81px;'
            : 'line-height: 50px; margin-right: 70px'}
      }
    }
    &__search {
    }
  }
`;
