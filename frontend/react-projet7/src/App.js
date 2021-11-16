import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Inscription" exact component={Inscription} />
        <Route path="/Connexion" exact component={Login} />
        <Route path="/Account" exact component={Account} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
