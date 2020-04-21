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
  alignIcon: 'left',
  text: '',
};

IconText.propTypes = {
  /**
   * Essa propriedade é responsavel por adicionar o texto do componente.
   */
  text: PropTypes.string,
  /**
   * Essa propriedade é responsavel por alinha o icone a `left` ou `right`
   */
  alignIcon: PropTypes.string,
};

export default IconText;
