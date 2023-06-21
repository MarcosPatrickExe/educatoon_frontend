import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
//import reportWebVitals from './reportWebVitals';
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
