import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/home/Home";
import { Login } from "./pages/Login";
import { CadastroSemCargo } from "./pages/Cadastro/cadastro-sem-cargo/CadastroSemCargo";



export const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/cadastrosemcargo' component={CadastroSemCargo} />
    </Switch>
  )
}