import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../Icons';

import { ContainerButton } from './styles';

const Button = ({ children, color, size, text, type }) => {
  return (
    <ContainerButton color={color} size={size} type={type}>
      {text}
      {children}
    </ContainerButton>
  );
};

Button.defaultProps = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  text: PropTypes.string,
};

Button.propTypes = {
  type: 'button',
  color: '##ac53f2',
  size: 'normal',
  text: '',
};

export default Button;
