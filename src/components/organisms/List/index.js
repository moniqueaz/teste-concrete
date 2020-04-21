import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithubAlt } from 'react-icons/fa';
import Title from '../../atoms/Title';
import IconText from '../../molecules/IconText';
import { StarIcon } from '../../atoms/Icons';
import Button from '../../atoms/Button';

// github-alt

import { WrapperStyle, Block, Item, Text, Star, Empty } from './styles';

const List = ({ data }) => {
  const [list, setList] = useState(data);
  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const groupBy = 5;
  const [itemsLength, setItemsLength] = useState(groupBy);

  const handleLoadMore = () => {
    if (showMoreItems()) {
      showMoreItems();
    }
    const newPage = page + 1;
    setPage(newPage);
  };

  const showMoreItems = () => {
    setList(list);
  };

  useEffect(() => {
    const showItemsLength = groupBy * page;
    setItemsLength(showItemsLength);
    const hasMore = showItemsLength < list.length;
    setShowLoadMore(hasMore);
  }, [page, groupBy, list]);

  const ajustTex = text => {
    return text.replace(/(-)/g, ' ');
  };

  return (
    <WrapperStyle>
      <Block>
        {list.length ? (
          <>
            {list.map((items, index) => {
              const {
                name,
                html_url,
                description,
                stargazers_count,
                node_id,
              } = items;
              return (
                index < itemsLength && (
                  <Item
                    key={node_id}
                    page={page}
                    itemsPerPage={groupBy}
                    index={index}
                  >
                    <Title text={ajustTex(name)} link={html_url} />
                    <Text>{description}</Text>
                    <Star>
                      <IconText text={String(stargazers_count)}>
                        <StarIcon />
                      </IconText>
                    </Star>
                  </Item>
                )
              );
            })}
            {showLoadMore && (
              <Button size="large" onClickButton={handleLoadMore}>
                <>
                  <div className="icon">
                    <FaGithubAlt />
                  </div>
                  Show More
                </>
              </Button>
            )}
          </>
        ) : (
          <Empty>
            <FaGithubAlt />
            <Title text="This repository is empty." color="#5c5c5c" />
          </Empty>
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
