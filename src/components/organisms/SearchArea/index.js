import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import Search from '../../molecules/Search';

import { Container } from './styles';

const SearchArea = ({ orientation, loader, onSearch }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    onSearch(value);
  }, [value]);

  return (
    <Container orientation={orientation} className="search-area">
      <div className="search-area__logo">
        <Logo size="large" />
      </div>
      <Search submitForm={setValue} loader={loader} />
    </Container>
  );
};

SearchArea.defaultProps = {
  orientation: 'horizontal',
  onSearch: () => undefined,
};

SearchArea.propTypes = {
  onSearch: PropTypes.func,
  orientation: PropTypes.string,
};

export default SearchArea;
