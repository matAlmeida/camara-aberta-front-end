import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/home";
import Perfil from "./containers/perfil";
// import Geral from "./containers/geral";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router hashType="noslash">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/perfil/:id" component={Perfil} />
          {/* <Route exact path="/geral" component={Geral} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
