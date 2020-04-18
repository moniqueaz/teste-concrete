import styled, { keyframes, css } from 'styled-components';

export const WrapperStyle = styled.div`
  .user {
    &__image {
      margin-bottom: 12px;
    }
    &__title {
      margin-bottom: 7px;
    }
  }
`;

export const List = styled.ul`
  margin-top: 28px;
`;

export const ListItem = styled.li`
  & + li {
    margin-top: 7px;
  }
`;
