import styled from 'styled-components';

export const WrapperStyle = styled.div`
  &.user {
    @media (min-width: 768px) and (max-width: 1023px) {
      display: flex;
    }
  }
  .user {
    &__image {
      margin-bottom: 12px;
      height: 280px;
      @media (min-width: 768px) {
        width: 280px;
        height: 280px;
      }
    }
    &__title {
      margin-bottom: 7px;
    }
    &__info {
      @media (min-width: 768px) and (max-width: 1023px) {
        margin-left: 20px;
      }
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
