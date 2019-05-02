import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Register from "./pages/register/Register";
import EditProfil from "./pages/profile/EditProfil";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from './layout/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Homepage} />
        <PrivateRoute path="/Home" exact component={Home} />
        <PrivateRoute path="/Profile" component={Profile} />
        <PrivateRoute path="/EditProfile" component={EditProfil} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Logout" component={Logout} />
      </Router>
    );
  }
}

export default App;
