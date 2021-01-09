import React, {useState, Fragment, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Header, Footer} from '../layouts';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { Link } from 'react-router-dom'
import axios from 'axios';
import App from '../components/App.jsx';
import {store} from '../index.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {authenticate} from '../actions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginRight: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px'
  }
})

var CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel control = {<Checkbox checked = {checked} onChange  = {(e) => setChecked(e.target.checked)}  color="secondary" inputProps={{'aria-label' : 'secondary checkbox'
    }}  />}
    label="Testing Checkbox"
    />
  )
}

var HomePage = () => {
  const classes = useStyles();
  const [userName, setUserName] = useState('');

  const authenticated = useSelector(state => state.authenticate)
  const dispatch = useDispatch();

  var getUserInfo = (user) => {
    axios.get(`/authentication/${user}`).then((data) => {
      console.log('SENT INFO', data.data[0])
      dispatch(authenticate(data.data[0].position));
    });
  }

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  }
  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{marginBottom:"15px", marginTop: "15px"}}
      >
      <FormControl style={{color: "white"}}>
      <InputLabel htmlFor="my-input" style={{color: "white"}}>Username
      </InputLabel>
      <Input onChange={handleInputChange} required style={{color: "white"}} id="my-input" aria-describedby="my-helper-text" />
      </FormControl  >
      <FormControl style={{color: "white"}}>
      <InputLabel htmlFor="my-input2" style={{color: "white"}}>Password
      </InputLabel>
      <Input required type="password"  id="my-input2" style={{color: "white"}} aria-describedby="my-helper-text" />
      </FormControl>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="flex-start">
      <Grid item>
      <Button startIcon={<AddIcon />} variant="contained" className={classes.root} style={{fontSize: 12}} component={Link} to="/registration">
      Register
      </Button>
      </Grid>
      <Grid item>
      <Button onClick={() => getUserInfo(userName)} startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} component={Link} to="/login">
      Login
      </Button>
      </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;