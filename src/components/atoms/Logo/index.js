import React from 'react';
import PropTypes from 'prop-types';

import { ContainerLogo } from './styles';

const Logo = ({ size }) => {
  return (
    <ContainerLogo size={size}>
      <span>GitHub</span>
      Search
    </ContainerLogo>
  );
};

Logo.defaultProps = {
  size: 'large',
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
