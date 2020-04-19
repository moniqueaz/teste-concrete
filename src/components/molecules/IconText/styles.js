import styled from 'styled-components';

export const Component = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 300;
  font-size: 20px;
  color: #5c5c5c;
`;

export const Icon = styled.span`
  ${props =>
    props.align === 'left' ? 'margin-right: 7px' : 'margin-left: 7px'};
`;
