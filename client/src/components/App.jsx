import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"
import HomePage from '../pages';
import Registration from '../pages/Registration.jsx';

var App = () => {
  return (
    <Router>
      <Switch>
     <Route exact path="/" component= {HomePage} />
     <Route exact path="/registration" component = {Registration}/>
     </Switch>
    </Router>
  );
}

export default App;
