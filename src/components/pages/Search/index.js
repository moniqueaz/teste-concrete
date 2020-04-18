import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchArea from '../../organisms/SearchArea';
import api from '../../../services/api';
import Logo from '../../atoms/Logo';
import SearchForm from '../../molecules/Search';

import { Container } from './styles';

const Search = () => {
  const [value, setValue] = useState('');

  const searchUser = async name => {
    const result = await api.get(`/users/${name}`);
  };

  useEffect(() => {
    searchUser(value);
  }, [value]);

  return (
    <Container className="search">
      <Logo size="large" />
      <SearchForm onSearch={setValue} />
    </Container>
  );
};

export default Search;
