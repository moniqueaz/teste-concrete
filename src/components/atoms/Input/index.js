import React from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const Input = ({ type, value, placeholder, border }) => {
  return (
    <Component
      value={value}
      type={type}
      placeholder={placeholder}
      border={border}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  border: true,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
};

export default Input;
