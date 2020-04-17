import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${props =>
    props.orientation === 'vertical' ? 'column' : 'rows'};

  // justify-content: center;
  align-items: center;

  .search-area {
    &__logo {
      ${props =>
        props.orientation === 'vertical'
          ? 'line-height: 81px;'
          : 'line-height: 50px; margin-right: 70px'}
    }
    &__search {
    }
  }
`;
