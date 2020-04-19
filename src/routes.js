import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/pages/Search';
import Result from './components/pages/Result';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user/:user" component={Result} />
        <Route path="/user/:user/repos" component={Result} />
        <Route path="/error" component={Result} />
      </Switch>
    </BrowserRouter>
  );
}
