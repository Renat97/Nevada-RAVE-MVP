import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import HomePage from '../pages';
import Registration from '../pages/Registration.jsx';
import VolunteerLogin from '../pages/VolunteerLogin.jsx';
import VolunteerForm from './VolunteerForm.jsx';
import VolunteerHours from '../pages/VolunteerHours.jsx';

var App = () => {
  return (
    <Router>
      <Switch>
     <Route exact path="/" component= {HomePage} />
     <Route exact path="/registration" component = {Registration}/>
     <Route exact path="/login" component = {VolunteerLogin}/>
     <Route exact path="/volunteerLogin" component = {VolunteerHours}/>
     </Switch>
    </Router>
  );
}

export default App;
