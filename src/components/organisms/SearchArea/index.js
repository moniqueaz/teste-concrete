import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import { Container } from './styles';

const SearchArea = ({ orientation, logoSize }) => {
  return (
    <Container orientation={orientation} className="search-area">
      <div className="search-area__logo">
        <Logo size={logoSize} />
      </div>
      <Search />
    </Container>
  );
};

SearchArea.defaultProps = {
  orientation: 'horizontal',
};

SearchArea.propTypes = {};

export default SearchArea;
