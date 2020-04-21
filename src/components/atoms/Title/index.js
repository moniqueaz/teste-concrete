import React from 'react';
import PropTypes from 'prop-types';

import { TitleContainer } from './styles';

const Title = ({ tag, text, color, link }) => {
  const Tag = tag;
  return (
    <TitleContainer color={color}>
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
  color: '#ac53f2',
  link: '',
  text: '',
};

Title.propTypes = {
  /**
   * Essa propriedade é responsavel por definir a tag do titulo. Ela possui uma
   * responsabilidade semantica pois não afeta o visual do componente.
   */
  tag: PropTypes.string,
  /**
   * Essa propriedade é responsavel por definir o texto que será exibito no titulo.
   */
  text: PropTypes.string,
  /**
   * Essa pripriedade é responsavel por definir a cor do titulo.
   */
  color: PropTypes.string,
  /**
   * Essa propriedade é responsavel por inserir um link ao titulo caso ele possua.
   */
  link: PropTypes.string,
};

export default Title;
