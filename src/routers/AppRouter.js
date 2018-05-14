import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AddEventPage from '../components/AddEventPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={AddEventPage} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
