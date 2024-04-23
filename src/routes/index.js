import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login/" component={Login} />
      <MyRoute exact path="/" component={Home} isClosed />
      <MyRoute exact path="/vanancies" component={Home} isClosed />
      <MyRoute exact path="/users" component={Home} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
