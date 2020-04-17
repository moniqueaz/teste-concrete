import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { SearchIcon } from '../../atoms/Icons';

import { Container } from './styles';

const Search = ({ buttonSize, placeholder, value, onSearch }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleButton = () => {
    onSearch(inputValue);
  };

  return (
    <Container>
      <Input
        value={value}
        type="text"
        placeholder={placeholder}
        border={false}
        onChangeValue={setInputValue}
      />
      <Button size={buttonSize} onClickButton={handleButton}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

Search.defaultProps = {
  onSearch: () => undefined,
};

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
