import styled, { keyframes, css } from 'styled-components';

const animateIn = keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const WrapperStyle = styled.div`
  margin: 20px 0;
  @media (min-width: 1024px) {
    margin: 0;
    margin-bottom: 20px;
  }

  .icon {
    margin-right: 10px;
  }

  ul {
    li {
      & + li {
        margin-top: 30px;
      }
      & + button {
        margin: 40px auto 0 auto;
      }
    }
  }
`;

export const Block = styled.ul``;

export const Item = styled.li`
  animation-name: ${animateIn};
  animation-duration: 0.4s;
  animation-timing-function: ease-out;
  animation-delay: ${props =>
    props.index - (props.page - 1) * props.itemsPerPage < 0
      ? -1
      : (props.index - (props.page - 1) * props.itemsPerPage) / 10}s;
  animation-fill-mode: both;
  transform-origin: 50% 0;
  height: 100%;
`;

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
