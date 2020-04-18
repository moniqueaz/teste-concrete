import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import User from '../../organisms/User';
import List from '../../organisms/List';

import { Content, Section } from './styles';

const Repos = ({ data }) => {
  return (
    <Content>
      <Section>
        <List />
      </Section>
    </Content>
  );
};

Repos.defaultProps = {};

Repos.propTypes = {};

export default Repos;
