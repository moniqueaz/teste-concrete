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
  onClickButton: () => undefined,
  loader: false,
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  bgColor: PropTypes.string,
  onClickButton: PropTypes.func,
  loader: PropTypes.bool,
};

export default Button;
