import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from '../../atoms/Image';
import Title from '../../atoms/Title';
import IconText from '../../molecules/IconText';
import {
  StarIcon,
  FollowersIcon,
  LocationIcon,
  OrganizationIcon,
  RepositorieIcon,
} from '../../atoms/Icons';

import { WrapperStyle, List, ListItem } from './styles';

const User = ({ data, stars, repositories }) => {
  const { avatar_url, followers, name, location, login, company } = data;
  return (
    <WrapperStyle className="user">
      <div className="user__image">
        <Image src={avatar_url} />
      </div>
      <div className="user__title">
        <Title text={name} />
      </div>
      <IconText text={login} />
      <List>
        <ListItem>
          <IconText text={company}>
            <OrganizationIcon />
          </IconText>
        </ListItem>
        <ListItem>
          <IconText text={location}>
            <LocationIcon />
          </IconText>
        </ListItem>
        <ListItem>
          <IconText text={stars}>
            <StarIcon />
          </IconText>
        </ListItem>
        <ListItem>
          <IconText text={repositories}>
            <RepositorieIcon />
          </IconText>
        </ListItem>
        <ListItem>
          <IconText text={followers}>
            <FollowersIcon />
          </IconText>
        </ListItem>
      </List>
    </WrapperStyle>
  );
};

User.defaultProps = {
  data: {},
  stars: 0,
  repositories: 0,
};

User.propTypes = {
  data: PropTypes.object,
  stars: PropTypes.number,
  repositories: PropTypes.number,
};

export default User;
