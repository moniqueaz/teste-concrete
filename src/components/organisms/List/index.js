import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atoms/Title';
import IconText from '../../molecules/IconText';
import { StarIcon } from '../../atoms/Icons';

import { WrapperStyle, Block, Item, Text, Star } from './styles';

const List = ({ data }) => {
  const ajustTex = text => {
    return text.replace(/(-)/g, ' ');
  };

  return (
    <WrapperStyle>
      <Block>
        {data.length ? (
          data.map(items => {
            const {
              name,
              html_url,
              description,
              stargazers_count,
              node_id,
            } = items;
            return (
              <Item key={node_id}>
                <Title text={ajustTex(name)} link={html_url} />
                <Text>{description}</Text>
                <Star>
                  <IconText text={String(stargazers_count)}>
                    <StarIcon />
                  </IconText>
                </Star>
              </Item>
            );
          })
        ) : (
          <div>Empty</div>
        )}
      </Block>
    </WrapperStyle>
  );
};

List.defaultProps = {
  data: [],
};

List.propTypes = {
  /**
   * Essa propriedade é responsavel por exibir o retorno dos dados da api.
   */
  data: PropTypes.array,
};

export default List;
