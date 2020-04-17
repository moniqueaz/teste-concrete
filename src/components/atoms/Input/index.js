import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const Input = ({
  type,
  value,
  placeholder,
  border,
  onChangeValue,
  required,
}) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    onChangeValue(val);
  }, [val]);

  return (
    <Component
      value={val}
      type={type}
      placeholder={placeholder}
      border={border}
      onChange={e => setVal(e.target.value)}
      required={required}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  border: true,
  onChangeValue: () => undefined,
  required: false,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  border: PropTypes.bool,
  onChangeValue: PropTypes.func,
  required: PropTypes.bool,
};

export default Input;
