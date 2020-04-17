import React from 'react';
import PropTypes from 'prop-types';

import { ContainerButton } from './styles';

const Button = ({ children, color, size, type, bgColor }) => {
  return (
    <ContainerButton color={color} size={size} type={type} bgColor={bgColor}>
      {children}
    </ContainerButton>
  );
};

Button.defaultProps = {
  type: 'button',
  color: '#fff',
  size: 'normal',
  bgColor: '#ac53f2',
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
