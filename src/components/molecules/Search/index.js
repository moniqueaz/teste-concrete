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
      <Button
        size={buttonSize}
        disabled={loader}
        type="submit"
        disabled={loader}
      >
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
  loader: false,
};

Search.propTypes = {
  /**
   * Essa propriedade é responsavel por passar a função que será executada
   * no evento de submit do form de busca.
   */
  onSearch: PropTypes.func.isRequired,
  /**
   * Essa propriedade é responsavel por exibir o status do componente.
   * Ela vai desabilitar o botão e o formulario
   */
  loader: PropTypes.bool,
};

export default Search;
