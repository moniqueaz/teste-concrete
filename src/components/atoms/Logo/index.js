import React from 'react';
import PropTypes from 'prop-types';

import { Link } from './styles';

const Logo = ({ size }) => {
  return (
    <Link href="/" size={size}>
      <span>GitHub</span>
      Search
    </Link>
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
