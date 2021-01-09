import React,  {Component, useState, Fragment, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Container, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {FormUserDetails, FormPersonalDetails} from './FormUserDetails.jsx';
import ChildrenForms from './ChildrenForm.jsx';

class FamilyForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    step: 1,
    gaurdianOneName: '',
    gaurdianTwoName: '',
    symptom1: false,
    symptom2: false,
    symptom3: false,
    symptom4: false,
    symptom5: false,
    symptom6: false,
    symptom7: false,
    symptom8: false,
    question2: '',
    question3: '',
    children: '',
    gaurdianOneSignature: '',
    gaurdianTwoSignature: '',
    staffSignature: ''
  }
  this.nextStep = this.nextStep.bind(this);
  this.prevStep = this.prevStep.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleButtonChange = this.handleButtonChange.bind(this);
  this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
 }
 nextStep() {
  const {step} = this.state;
  this.setState({
    step: step + 1
  })
 }
 // go back to previos step
 prevStep() {
  const {step} = this.state;
  this.setState({
    step: step - 1
  })
 }
 // handle fields change
handleChange(input,e) {
  this.setState({ [input] : e.target.value });
}
handleButtonChange(e) {
    this.setState({
      [e.target.name] : e.target.checked
    })
}
handleRadioButtonChange(e) {
  console.log(e.target.name);
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render() {
    const {step} = this.state;
    const {gaurdianOneName,
    gaurdianTwoName,
    symptom1,
    symptom2,
    symptom3,
    symptom4,
    symptom5,
    symptom6,
    symptom7,
    symptom8,
    question2,
    question3,
    children,
    gaurdianOneSignature,
    gaurdianTwoSignature,
    staffSignature} = this.state;
    const values = {gaurdianOneName,
      gaurdianTwoName,
      symptom1,
      symptom2,
      symptom3,
      symptom4,
      symptom5,
      symptom6,
      symptom7,
      symptom8,
      question2,
      question3,
      children,
      gaurdianOneSignature,
      gaurdianTwoSignature,
      staffSignature};

      switch(step) {
        case 1:
          return (
            <FormUserDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} handleButtonChange={this.handleButtonChange}/>
          )
        case 2:
          return (
            <FormPersonalDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} handleRadioButtonChange={this.handleRadioButtonChange}/>
          )
        case 3:
          return (
            <ChildrenForms children={children}/>
          )
        case 4:
          return (
            <h1> Fourth form page</h1>
          )
      }
    return (
      <div>
          <h1>Family Form</h1>
      </div>
    )
  }
}

export default FamilyForm;
