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
  /**
   * Essa propriedade é responsavel por passar o src da imagem.
   */
  src: PropTypes.string,
  /**
   * Essa propriedade é responsavel por atribuir o alt da imagem.
   */
  alt: PropTypes.string,
  /**
   * Essa propriedade é responsavel por setar a largura da imagem
   */
  width: PropTypes.string,
  /**
   * Essa propriedade é responsavel por setar a altura da imagem
   */
  height: PropTypes.string,
};

export default Image;
