import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Route, useHistory } from 'react-router-dom';
import Result from '../Result';
import Error from '../Error404';
import Logo from '../../atoms/Logo';
import SearchForm from '../../molecules/Search';
import api from '../../../services/api';

import { Header, Container } from './styles';

const Main = ({ match }) => {
  const { user } = match.params;
  const [value, setValue] = useState(user);
  // const location = useHistory();

  // const getRepository = async name => {
  //   const [user, repositories] = await Promise.all([
  //     api.get(`/users/${name}`),
  //     api.get(`/users/${name}/repos`, {
  //       params: {
  //         state: 'open',
  //         per_page: 5,
  //       },
  //     }),
  //   ]).catch(error => {
  //     location.push('/error');
  //   });
  // };

  // useEffect(() => {
  //   // console.log('value: ', value);
  //   // value && getRepository(value);
  // }, [value]);

  return (
    <Container>
      <Header>
        <Logo size="normal" />
        <div className="header__search">
          <SearchForm onSearch={setValue} value={value} />
        </div>
      </Header>
      <Switch>
        <Route path="/user/:user/repos">
          <Result />
        </Route>
        <Route path="/user/:user">Loading...</Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </Container>
  );
};

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
