import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Logout from "./pages/login/Logout";
import Register from "./pages/register/Register";
import EditProfil from "./pages/profile/EditProfil";
import Search from "./pages/search/Search";
import Meetup from "./pages/meetup/Meetup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from './layout/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Homepage} />
        <PrivateRoute path="/Home" exact component={Home} />
        <PrivateRoute path="/Profile" exact component={Profile} />
        <PrivateRoute path="/EditProfile" exact component={EditProfil} />
        <PrivateRoute path="/Search" exact component={Search}/>
        <PrivateRoute path="/Meetup" exact component={Meetup}/>
        <Route path="/Profile/:id" exact component={Profile} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Register" exact component={Register} />
        <Route path="/Logout" exact component={Logout} />
      </Router>
    );
  }
}

export default App;
