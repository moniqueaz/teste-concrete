import React from 'react';
import PropTypes from 'prop-types';

import { Img, ImageContainer } from './styles';

const Image = ({ src, alt, width, height }) => {
  return (
    <ImageContainer url={src} width={width} height={height}>
      <Img src={src} alt={alt} />
    </ImageContainer>
  );
};

Image.defaultProps = {
  src: 'https://via.placeholder.com/280',
  alt: '',
  width: '280px',
  height: '280px',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Image;
