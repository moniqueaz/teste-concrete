import React from 'react';
import PropTypes from 'prop-types';

import { TitleContainer } from './styles';

const Title = ({ tag, text, color, link }) => {
  const Tag = tag;
  return (
    <TitleContainer color={link ? '#ac53f2' : color}>
      {link ? (
        <a href={link}>
          <Tag>{text}</Tag>
        </a>
      ) : (
        <Tag>{text}</Tag>
      )}
    </TitleContainer>
  );
};

Title.defaultProps = {
  tag: 'h2',
  text: '',
  color: '#ac53f2',
  link: '',
};

Title.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string,
};

export default Title;
