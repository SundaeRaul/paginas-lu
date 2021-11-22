import React from 'react';
import ReactDOM from 'react-dom';
import reactRoutes from './routes';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <reactRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

