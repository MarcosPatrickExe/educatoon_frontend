import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/home/Home";
import { Login } from "./pages/Login";
import { CadastroSemCargo } from "./pages/Cadastro/cadastro-sem-cargo/CadastroSemCargo";
import { CadastroGuardiao } from "./pages/Cadastro/cadastro-guardiao-professor";
import { CadastroEscola } from "./pages/Cadastro/cadastro-escola";
import { SelectUser } from "./pages/selectUser/SelectUser";
import { SelectHq } from "./pages/selectHq/SelectHq"

/*
export const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Login' component={Login} />
      <Route exact path='/cadastrosemcargo' component={CadastroSemCargo} />
      <Route exact path='/cadastroguardiao' component={CadastroGuardiao} />
      <Route exact path='/cadastroescola' component={CadastroEscola} />
      <Route exact path='/selectuser' component={SelectUser} />
      <Route exact path='/selecthq' component={SelectHq} />
    </Switch>
  )
}
*/