import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './components/pages/Search';
import Result from './components/pages/Result';
import Main from './components/pages/Main';
// import Error404 from './components/pages/Error404';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/user/:user" component={Main} />
        <Route path="/error" component={Main} />
        <Route path="/user/:user/repos" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
