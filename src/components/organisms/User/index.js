import React from 'react';
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

const User = ({ data }) => {
  const {
    avatar_url,
    followers,
    name,
    location,
    login,
    company,
    stars,
    repositories,
  } = data;

  return (
    <WrapperStyle className="user">
      <>
        <div className="user__image">
          <Image src={avatar_url} width="100%" height="100%" />
        </div>
        <div className="user__info">
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
              <IconText text={String(stars)}>
                <StarIcon />
              </IconText>
            </ListItem>
            <ListItem>
              <IconText text={String(repositories)}>
                <RepositorieIcon />
              </IconText>
            </ListItem>
            <ListItem>
              <IconText text={String(followers)}>
                <FollowersIcon />
              </IconText>
            </ListItem>
          </List>
        </div>
      </>
    </WrapperStyle>
  );
};

User.defaultProps = {
  data: {},
};

User.propTypes = {
  /**
   * Essa propriedade é responsavel por inserir os dados do usuario.
   * Ela é um objeto.
   */
  data: PropTypes.object,
};

export default User;
