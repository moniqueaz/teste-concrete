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
  size: 'large',
};

Logo.propTypes = {
  size: PropTypes.string,
};

export default Logo;
