import React, {useState, Fragment, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { Container, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
import axios from 'axios';

const useStyles = makeStyles( theme => ({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginRight: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px'
  },
  textInput: {
  '& .MuiFormControl-root': {
    width: '80%',
    margin: theme.spacing(1),
    color: 'white'
  }
  },
  formInput: {
  }
}));


const InitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  emergencyContactName: '',
  emergencyContactNumber: ''
}

var VolunteerForm = () => {
const classes = useStyles();
const [values, setValues] = useState(InitialValues);

const registerVolunteer = (data) => {
  axios.post('/login', data).then((response) => {
    console.log('data has been sent');
  })
}

const handleInputChange = (e) => {
  const {name, value} = e.target;
  setValues({
    ...values,
    [name]:value
  })
}
return (
<form className={classes.textInput}>
       <Grid container>
       <Grid item xs= {12} align="center">
         <TextField variant="filled" label="first name" name="firstName" value={values.firstName} InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>

         </TextField>
       </Grid>
       <Grid item xs= {12} align="center" >
         <TextField variant="filled" label="last name" name="lastName" value={values.lastName}  InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>>

         </TextField>
       </Grid>
       <Grid item xs= {12} align="center" >
         <TextField variant="filled" name="email" label="email" type="email" value={values.email}  InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>

         </TextField>
       </Grid>
       <Grid item xs= {12} align="center" >
         <TextField variant="filled" label="username" name="username" value={values.username} InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>

         </TextField>
       </Grid>
       <Grid item xs= {12} align="center" >
         <TextField variant="filled" label="password" name="password" type="password" value={values.password}  InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>
         </TextField>
       </Grid>
       <Grid item xs= {12} align="center" >
         <TextField variant="filled" label="emergency name" name="emergencyContactName" value={values.emergencyContactName}  InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>

         </TextField>
       </Grid>
       <Grid item xs= {12} align="center">
         <TextField variant="filled" label="emergency #" name="emergencyContactNumber"value={values.emergencyContactNumber}  InputProps={{
           style: {
             color: "black",
             backgroundColor: "#d9dedd"
           }
         }} onChange={handleInputChange}>

         </TextField>
       </Grid>
      </Grid>
      <Grid container justify="flex-end">
      <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} component={Link} to="/" onClick={() => {registerVolunteer(values)} }>
      Sign up
      </Button>
      </Grid>
</form>
)
}

export default VolunteerForm;