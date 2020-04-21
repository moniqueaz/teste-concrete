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

  const handleChange = input => {
    setVal(input);
  };

  useEffect(() => {
    onChangeValue(val);
  }, [val]);

  return (
    <Component
      value={val}
      type={type}
      placeholder={placeholder}
      border={border}
      onChange={e => handleChange(e.target.value)}
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
  /**
   * Essa propriedade é responsavel por definir o atributo type do imput.
   */
  type: PropTypes.string,
  /**
   * Essa propriedade é responsavel por definir o value do input.
   */
  value: PropTypes.string,
  /**
   * Essa prorpiedade é responsavel por definir o placeholder do input.
   */
  placeholder: PropTypes.string,
  /**
   * Essa propriedade é responsavel por definir se haverá ou não bordar no input.
   */
  border: PropTypes.bool,
  /**
   * Essa propriedade é responsavel por passar a função que será chamada no evento
   * change do input.
   */
  onChangeValue: PropTypes.func,
  /**
   * Essa propriedade é responsavel por definir se o input é required ou não.
   */
  required: PropTypes.bool,
};

export default Input;
