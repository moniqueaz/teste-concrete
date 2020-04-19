import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import User from '../../organisms/User';
import List from '../../organisms/List';

import { Content, Section } from './styles';

const Result = ({ user }) => {
  return (
    <Content>
      <Section>
        <User />
      </Section>
      <Section>
        list
        <List />
      </Section>
    </Content>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
