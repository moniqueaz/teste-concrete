import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import User from '../../organisms/User';

import { Content, Section } from './styles';

const User = ({ data }) => {
  return (
    <Content>
      <Section>
        <User />
      </Section>
    </Content>
  );
};

User.defaultProps = {};

User.propTypes = {};

export default User;
