import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import { Container } from './styles';

const User = () => {
  useEffect(() => {
    onSearch(value);
  }, [value]);

  return <div>User</div>;
};

User.defaultProps = {};

User.propTypes = {};

export default User;
