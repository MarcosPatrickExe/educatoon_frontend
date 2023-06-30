import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home/Home';
//import reportWebVitals from './reportWebVitals';
import Login from "./pages/login/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Category from './pages/category/Category';



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
        path: "/category",
        element: <Category />
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
