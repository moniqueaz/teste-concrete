import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import HeaderSearch from '../../templates/HeaderSearch';

import { Content, Title } from './styles';

const Error404 = ({}) => {
  return (
    <HeaderSearch onSearch={() => undefined}>
      <Content>
        <Title>User not found :(</Title>
      </Content>
    </HeaderSearch>
  );
};

Error404.defaultProps = {};

Error404.propTypes = {};

export default Error404;
