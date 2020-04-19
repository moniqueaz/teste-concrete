import styled from 'styled-components';

export const WrapperStyle = styled.div`
  ul {
    li {
      & + li {
        margin-top: 30px;
      }
    }
  }
`;

export const Block = styled.ul``;

export const Item = styled.li``;

export const Star = styled.div`
  margin-top: 9px;
`;

export const Text = styled.p`
  font-weight: 300;
  line-height: 25px;
`;
