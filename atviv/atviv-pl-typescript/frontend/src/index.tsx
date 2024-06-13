import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Dashboard from './componentes/dashboard';
import FormCliente from './componentes/formulario';
import VerCliente from './componentes/verCliente';
import FormClienteEditar from './componentes/formularioEditar';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard tituloSite='PetLovers'/>,
  },
  {
    path: "/cliente/:id",
    element: <VerCliente/>,
  },
  {
    path: "/cliente/cadastrar",
    element: <FormCliente />
  },
  {
    path: "/cliente/editar/:id",
    element: <FormClienteEditar />
  }

]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
