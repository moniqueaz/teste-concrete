import styled, { keyframes, css } from 'styled-components';

export const TitleContainer = styled.div`
  * {
    font-size: 35px;
    font-weight: 500;
    color: ${props => props.color};
    line-height: 40px;
  }
`;
