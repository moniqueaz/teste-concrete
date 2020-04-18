import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/pages/Search';
import Result from './components/pages/Result';
import Repos from './components/pages/Repos';
import Error404 from './components/pages/Error404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user/:user" component={Result} />
        <Route path="/error" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}
