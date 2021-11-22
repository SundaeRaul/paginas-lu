import * as React from "react";
import { Switch, Route } from 'react-router-dom';
import Confirmacao from './pages/Confirmacao/index';
import Done from './pages/Done/index';

function reactRoutes() {
  return (
    <Switch>
        <Route path="/confirmacao" component={Confirmacao}/>
        <Route path="/done" component={Done}/>
    </Switch>
  );
}

export default reactRoutes;