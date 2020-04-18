import React from 'react';
import PropTypes from 'prop-types';

import { TitleContainer } from './styles';

const Title = ({ tag, text, color }) => {
  const Tag = tag;
  return (
    <TitleContainer color={color}>
      <Tag>{text}</Tag>
    </TitleContainer>
  );
};

Title.defaultProps = {
  tag: 'h2',
  text: '',
  color: '#ac53f2',
};

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Title;
