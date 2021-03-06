import styled from 'styled-components';

export const Link = styled.a`
  font-style: italic;
  font-weight: 300;
  line-height: 81px;
  text-decoration: none;
  color: #000;
  font-size: ${props =>
    props.size === 'large'
      ? '40px'
      : props.size === 'normal'
      ? '30px'
      : '20px'};

  @media (min-width: 768px) {
    font-size: ${props =>
      props.size === 'large'
        ? '60px'
        : props.size === 'normal'
        ? '40px'
        : '20px'};
  }

  span {
    font-family: Monaco;
    font-style: normal;
    margin-right: 5px;
  }
`;
