import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { SearchIcon } from '../../atoms/Icons';
import { FaSpinner } from 'react-icons/fa';

import { Form } from './styles';

const Search = ({ buttonSize, placeholder, value, onSearch, loader }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Input
        value={value}
        type="text"
        placeholder={placeholder}
        border={false}
        onChangeValue={setInputValue}
        required={true}
      />
      <Button size={buttonSize} loader={loader} type="submit">
        {loader ? (
          <div className="loop">
            <FaSpinner />
          </div>
        ) : (
          <SearchIcon />
        )}
      </Button>
    </Form>
  );
};

Search.defaultProps = {
  onSearch: () => undefined,
  loader: false,
};

Search.propTypes = {
  onSearch: PropTypes.func,
  loader: PropTypes.bool,
};

export default Search;
