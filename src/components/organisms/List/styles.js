import styled from 'styled-components';

export const WrapperStyle = styled.div`
  margin: 20px 0;
  @media (min-width: 1024px) {
    margin: 0;
    margin-bottom: 20px;
  }
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

export const Empty = styled.div`
  width: 100%;
  padding: 20px;
  text-align: center;
  box-shadow: inset 0 0 4px #5c5c5c;
  background-color: ghostwhite;

  svg {
    width: 50px;
    height: 50px;
    opacity: 0.7;
    margin-bottom: 10px;
  }
`;
