import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SearchIcon } from '../../atoms/Icons';
import SearchArea from '../../organisms/SearchArea';
import Default from '../../templates/Default';

import { Container } from './styles';

const Search = () => {
  return (
    <Default>
      <Container className="search">
        <SearchArea orientation="vertical" className="search-area" />
      </Container>
    </Default>
  );
};

Search.defaultProps = {};

Search.propTypes = {};

export default Search;
