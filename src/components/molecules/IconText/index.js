import React from 'react';
import PropTypes from 'prop-types';

import { Text, Icon, Component } from './styles';

const IconText = ({ children, text, alignIcon }) => {
  return (
    <Component>
      {children && (
        <Icon align={alignIcon}>{alignIcon === 'left' && children}</Icon>
      )}
      <Text>{text}</Text>
      {children && (
        <Icon align={alignIcon}>{alignIcon === 'right' && children}</Icon>
      )}
    </Component>
  );
};

IconText.defaultProps = {
  text: '',
  alignIcon: 'left',
};

IconText.propTypes = {
  text: PropTypes.string,
  alignIcon: PropTypes.string,
};

export default IconText;
