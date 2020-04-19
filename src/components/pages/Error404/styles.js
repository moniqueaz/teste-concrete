import styled from 'styled-components';

export const Content = styled.div`
  margin: 0 auto;
  margin-top: 124px;

  .error {
    &__title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  font-weight: 400;
  color: #ac53f2;
  line-height: 40px;
  text-decoration: none;
  text-transform: capitalize;
`;
