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
        {data.map(items => {
          const { name, html_url, description, stargazers_count } = items;
          return (
            <Item>
              <Title text={ajustTex(name)} link={html_url} />
              <Text>{description}</Text>
              <Star>
                <IconText text={stargazers_count}>
                  <StarIcon />
                </IconText>
              </Star>
            </Item>
          );
        })}
      </Block>
    </WrapperStyle>
  );
};

List.defaultProps = {
  data: {},
};

List.propTypes = {
  data: PropTypes.object,
};

export default List;
