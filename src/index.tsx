import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
//import reportWebVitals from './reportWebVitals';
import Login from "./pages/login/Login";
import CadastroSemCargo from './pages/Cadastro/cadastro-sem-cargo/CadastroSemCargo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './pages/category/Category';
import CadastroGuardiao from './pages/Cadastro/cadastro-guardiao-professor/CadastroGuardiao';
import CadastroEscola from './pages/Cadastro/cadastro-escola/CadastroEscola';
import SelectUser from './pages/selectUser/SelectUser';
import SelectHq from './pages/selectHq/SelectHq';
// URLs DE CADA PAGINA:

const browserRouter = createBrowserRouter(
    [
      { 
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/cadastrosemcargo",
        element: <CadastroSemCargo />
      },
      {
        path: "/cadastroguardiao",
        element: <CadastroGuardiao />
      },
      {
        path: "/cadastroescola",
        element: <CadastroEscola />
      },
      {
        path: "/selectuser",
        element: <SelectUser />
      },
      {
        path: "/selecthq",
        element: <SelectHq />
      }
    ]
);


ReactDOM.createRoot(
       document.getElementById('root') as HTMLElement
   ).render(
    <React.StrictMode>
          <RouterProvider router={ browserRouter } />
    </React.StrictMode>
);
