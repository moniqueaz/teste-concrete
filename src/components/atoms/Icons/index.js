import React from 'react';
import search from '../../../assets/icons/search.svg';
import star from '../../../assets/icons/star.svg';
import followers from '../../../assets/icons/followers.svg';
import location from '../../../assets/icons/location.svg';
import organization from '../../../assets/icons/organization.svg';
import repositorie from '../../../assets/icons/repositorie.svg';

import { Icon } from './styles';

export const SearchIcon = () => (
  <Icon src={search} className="icon icon--search" />
);

export const StarIcon = () => <Icon src={star} className="icon icon--star" />;

export const FollowersIcon = () => (
  <Icon src={followers} className="icon icon--followers" />
);

export const LocationIcon = () => (
  <Icon src={location} className="icon icon--location" />
);

export const OrganizationIcon = () => (
  <Icon src={organization} className="icon icon--organization" />
);

export const RepositorieIcon = () => (
  <Icon src={repositorie} className="icon icon--repositorie" />
);
