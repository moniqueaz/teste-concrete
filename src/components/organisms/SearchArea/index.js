import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import { Container } from './styles';

const SearchArea = ({ orientation, loader, onSearch, logoSize }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <Container orientation={orientation} className="search-area">
      <div className="search-area__logo">
        <Logo size={logoSize} />
      </div>
      <Search onSearch={setValue} loader={loader} />
    </Container>
  );
};

SearchArea.defaultProps = {
  orientation: 'horizontal',
  onSearch: () => undefined,
  logoSize: 'normal',
};

SearchArea.propTypes = {
  onSearch: PropTypes.func,
  orientation: PropTypes.string,
  logoSize: PropTypes.string,
};

export default SearchArea;
