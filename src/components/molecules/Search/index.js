import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { SearchIcon } from '../../atoms/Icons';

import { Container } from './styles';

const Search = ({ buttonSize, placeholder, value }) => {
  return (
    <Container>
      <Input
        value={value}
        type="text"
        placeholder={placeholder}
        border={false}
      />
      <Button size={buttonSize}>
        <SearchIcon />
      </Button>
    </Container>
  );
};

Search.defaultProps = {};

Search.propTypes = {};

export default Search;
