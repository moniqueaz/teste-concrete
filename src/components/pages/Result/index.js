import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Route } from 'react-router-dom';
import User from '../../organisms/User';
import List from '../../organisms/List';
import Error from '../Error404';
import SearchArea from '../../organisms/SearchArea';
import Logo from '../../atoms/Logo';
import SearchForm from '../../molecules/Search';

import { Content, Section, Header, Container } from './styles';

const Result = () => {
  const [value, setValue] = useState('');
  return (
    <Container>
      <Header>
        <Logo size="normal" />
        <div className="header__search">
          <SearchForm onSearch={setValue} />
        </div>
      </Header>
      <Switch>
        <Route path="/user/:user">
          <Content>
            <Section>
              <User />
            </Section>
            <Section>
              <h1>List</h1>
              <List />
            </Section>
          </Content>
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </Container>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
