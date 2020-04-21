import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #5c5c5c;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;
  opacity: 0.4;

  &:hover {
    transition: all 0.2s;
    opacity: 1;
  }
`;
