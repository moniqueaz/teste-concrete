import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Route } from 'react-router-dom';
import User from '../../organisms/User';
import List from '../../organisms/List';
import Error from '../Error404';
import SearchArea from '../../organisms/SearchArea';

import { Content, SectionLeft, SectionRight, Header } from './styles';

const Result = () => {
  return (
    <>
      <Header>
        <SearchArea />
      </Header>
      <Switch>
        <Route path="/user/:user">
          <Content>
            <SectionLeft>
              <User />
            </SectionLeft>
            <SectionRight>
              <List />
            </SectionRight>
          </Content>
        </Route>
        <Route path="/error">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

Result.defaultProps = {};

Result.propTypes = {};

export default Result;
