import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../atoms/Logo';
import SearchForm from '../../molecules/Search';
import Default from '../../templates/Default';

import { Container } from './styles';

const Search = () => {
  const location = useHistory();

  const redirect = name => {
    location.push(`/user/${encodeURIComponent(name)}`);
  };

  const handleSearch = name => {
    redirect(name);
  };

  return (
    <Default>
      <Container className="search">
        <Logo size="large" />
        <SearchForm onSearch={handleSearch} />
      </Container>
    </Default>
  );
};

export default Search;
