import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchArea from '../../organisms/SearchArea';
import api from '../../../services/api';

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
      <SearchArea
        orientation="vertical"
        className="search-area"
        onSearch={setValue}
      />
    </Container>
  );
};

export default Search;
