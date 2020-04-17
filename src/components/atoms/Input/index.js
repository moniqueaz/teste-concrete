import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const Input = ({ type, value, placeholder, border, onChangeValue }) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    onChangeValue();
  }, [val]);

  return (
    <Component
      value={val}
      type={type}
      placeholder={placeholder}
      border={border}
      onChange={e => setVal(e.target.value)}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  border: true,
  onChangeValue: () => undefined,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  onChangeValue: PropTypes.func,
};

export default Input;
