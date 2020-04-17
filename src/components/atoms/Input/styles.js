import styled, { keyframes, css } from 'styled-components';

export const ContainerInput = styled.input`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);
  border: 0;
  width: 100%;
  height: 50px;
  padding: 10px;
  &::placeholder {
    color: #ccc;
  }
`;
