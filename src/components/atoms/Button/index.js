import React from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const Button = ({ children, color, size, type, bgColor }) => {
  return (
    <Component color={color} size={size} type={type} bgColor={bgColor}>
      {children}
    </Component>
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
