import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
import Welcome from "./components/pages/Welcome";
import login from "./authentication/login";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={login} />
        <Navbar />

        <Switch>
          <Route exact path="/" component={login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Welcome" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
