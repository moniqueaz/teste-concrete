import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import SearchForm from '../../molecules/Search';

import { Container } from './styles';

const Search = () => {
  const [value, setValue] = useState('');
  const location = useHistory();

  const redirect = name => {
    location.push(`/user/${encodeURIComponent(name)}`);
  };

  const handleSearch = input => {
    setValue(input);
  };

  useEffect(() => {
    value && redirect(value);
  }, [value]);

  return (
    <Container className="search">
      <Logo size="large" />
      <SearchForm onSearch={handleSearch} />
    </Container>
  );
};

export default Search;
