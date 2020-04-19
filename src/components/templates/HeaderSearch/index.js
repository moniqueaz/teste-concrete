import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchArea from '../../organisms/SearchArea';

import { Container, Header, Content } from './styles';

const HeaderSearch = ({ children, onSearch }) => {
  const handleSearch = value => {
    onSearch(value);
  };

  return (
    <Container>
      <Header>
        <SearchArea onSearch={handleSearch} />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

HeaderSearch.defaultProps = {};

HeaderSearch.propTypes = {};

export default HeaderSearch;
