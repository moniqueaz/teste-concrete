import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import User from '../../organisms/User';
import api from '../../../services/api';

import { Content, Section } from './styles';

const UserPage = ({ data }) => {
  const [user, setUser] = useState({});

  const getUser = async value => {
    const result = await api.get(`/users/${value}`);
    console.log('result: ', result);
  };

  useEffect(() => {
    getUser(data);
  }, [data]);

  return (
    <Content>
      <Section>
        <User />
      </Section>
    </Content>
  );
};

UserPage.defaultProps = {};

UserPage.propTypes = {};

export default UserPage;
