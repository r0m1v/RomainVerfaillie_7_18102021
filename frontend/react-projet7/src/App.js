import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inscription from "./pages/Inscription";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Inscription" exact component={Inscription} />
        <Route path="/Connexion" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
