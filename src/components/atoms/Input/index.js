import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import Button from '../Button';

import { Component, InputWrapper } from './styles';

const Input = ({
  type,
  value,
  placeholder,
  border,
  onChangeValue,
  required,
  clear,
}) => {
  const [val, setVal] = useState(value);

  const handleChange = input => {
    setVal(input);
  };

  const clearInput = () => {
    setVal('');
  };

  useEffect(() => {
    onChangeValue(val);
  }, [val]);

  return (
    <InputWrapper>
      {clear && (
        <div className="input__button--close">
          <Button
            type="button"
            bgColor="#fff"
            color="#5c5c5c"
            size="small"
            onClickButton={() => clearInput()}
          >
            <FaTimes />
          </Button>
        </div>
      )}
      <Component
        value={val}
        type={type}
        placeholder={placeholder}
        border={border}
        onChange={e => handleChange(e.target.value)}
        required={required}
      />
    </InputWrapper>
  );
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  border: true,
  onChangeValue: () => undefined,
  required: false,
  clear: false,
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
  /**
   * Essa propriedade é responsavel por inserir o botão para limpar o campo input
   */
  clear: PropTypes.bool,
};

export default Input;
