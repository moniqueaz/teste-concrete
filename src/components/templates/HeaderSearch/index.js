import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import { Container, Header, Content } from './styles';

const HeaderSearch = ({ children, onSearch }) => {
  const handleSearch = value => {
    onSearch(value);
  };

  return (
    <Container>
      <Header>
        <Logo size="normal" />
        <div className="header__search">
          <Search onSearch={handleSearch} />
        </div>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

HeaderSearch.defaultProps = {};

HeaderSearch.propTypes = {};

export default HeaderSearch;
