import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
    </Switch>
  )
}