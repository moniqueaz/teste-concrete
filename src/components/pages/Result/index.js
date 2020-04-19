import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Route, useHistory } from 'react-router-dom';
import HeaderSearch from '../../templates/HeaderSearch';
import User from '../../organisms/User';
import List from '../../organisms/List';
import api from '../../../services/api';
import Error404 from '../../pages/Error404';

import { Content, SectionLeft, SectionRight } from './styles';

const Result = ({ match }) => {
  const { user } = match.params;
  const [value, setValue] = useState(user);
  const location = useHistory();
  console.log('location: ', location);

  const getRepository = async name => {
    Promise.all([api.get(`/users/${name}`), api.get(`/users/${name}/repos`)])
      .then(({ value }) => {
        console.log('value: ', value);
      })
      .catch(error => {
        location.push('/error');
      });
  };

  useEffect(() => {
    (async () => {
      await getRepository(value);
      console.log('olã');
    })();
  }, [value]);

  return (
    <HeaderSearch onSearch={setValue}>
      <Content>
        <Switch>
          <Route path="/user/:user" exact>
            Loading...
          </Route>
          <Route path="/user/:user/repos">
            <SectionLeft>
              <User />
            </SectionLeft>
            <SectionRight>
              <List />
            </SectionRight>
          </Route>
          <Route path="/error" exact>
            <Error404 />
          </Route>
        </Switch>
      </Content>
    </HeaderSearch>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
