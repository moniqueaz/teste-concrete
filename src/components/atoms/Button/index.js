import React from 'react';
import PropTypes from 'prop-types';

import { Component } from './styles';

const Button = ({
  children,
  color,
  size,
  type,
  bgColor,
  loader,
  onClickButton,
}) => {
  return (
    <Component
      color={color}
      size={size}
      type={type}
      bgColor={bgColor}
      onClick={() => onClickButton()}
      loader={loader}
    >
      {children}
    </Component>
  );
};

Button.defaultProps = {
  type: 'button',
  color: '#fff',
  size: 'normal',
  bgColor: '#ac53f2',
  // onClickButton: () => undefined,
  loader: false,
};

Button.propTypes = {
  /**
   * Essa propriedade é responsavel por seta o type do button.
   * Tipos mais comuns, `button` e `submit`.
   */
  type: PropTypes.string,
  /**
   * Essa propriedade é responsavel por setar a cor de texto do button.
   */
  color: PropTypes.string,
  /**
   * Essa propriedade é responsavel por setar o tamanho do button.
   * Ela aceita parametros como `small`, `normal` e `large`.
   */
  size: PropTypes.string,
  /**
   * Essa propriedade é responsavel por setar a cor de fundo do button.
   */
  bgColor: PropTypes.string,
  /**
   * Essa propriedade é responsavel por informar qual função será chamado ao executar
   * o evento de click do button.
   */
  onClickButton: PropTypes.func.isRequired,
  /**
   * Essa propriedade é responsavel por setar o status de carregando do button.
   */
  loader: PropTypes.bool,
};

export default Button;
