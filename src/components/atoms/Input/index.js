import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ContainerInput } from './styles';

const Input = ({ type, value, placeholder }) => {
  return <ContainerInput value={value} type={type} placeholder={placeholder} />;
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: 'Search',
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
