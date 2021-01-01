import React, {useState, useEffect} from 'react';
import HomePage from './HomePage.jsx';
import VolunteerLogin from './VolunteerLogin.jsx';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import MainPage from '../pages';
import NotFoundPage from '../pages';

var App = () => {
  return (
    <Router>
      <Switch>
     <Route exact path="/" component= {MainPage} />
     <Route component = {NotFoundPage}/>
     </Switch>
    </Router>
  );
}

export default App;
