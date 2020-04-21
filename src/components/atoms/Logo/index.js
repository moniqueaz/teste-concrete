import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Logo = ({ size }) => {
  return (
    <Container size={size}>
      <span>GitHub</span>
      Search
    </Container>
  );
};

Logo.defaultProps = {
  size: 'normal',
};

Logo.propTypes = {
  /**
   * Essa propriedade é responsavel por setar o tamanho da logo que pré definidos
   * como `small`, `noemal` e `large`.
   */
  size: PropTypes.string,
};

export default Logo;
