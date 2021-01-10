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
import IconButton from '@material-ui/core/IconButton';
import { palette, spacing, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom'
import axios from 'axios';
import App from '../components/App.jsx';
import {store} from '../index.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {authenticate} from '../actions';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
var Img = "https://myfecimages.s3-us-west-1.amazonaws.com/pngtree-children-holding-hands-clipart-png-image_5701125.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginRight: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px',
  },
  root2: {
    background: 'linear-gradient(90deg, #E3C9CEFF, #E3C9CEFF)',
    border: 0,
    marginRight: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px',
  },
  margin: {
    margin: theme.spacing(1),
    color: "white"
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  outlined: {
    '&$focused': {
      color: 'white'
    }
  },
  image: {
    height: "300px",
    position: "absolute"
  },
  testLabel: {
    color: "white"
  },
  outlinedInput: {
    "& $notchedOutline": {
      borderWidth: 0,
      color: "white"
    },
    "&:hover $notchedOutline": {
      borderWidth: 0,
      color: "white"
    },
    "&$focused $notchedOutline": {
      borderWidth: 0,
      color: "white"
    }
  }
}));

var CheckBoxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel control = {<Checkbox checked = {checked} onChange  = {(e) => setChecked(e.target.checked)}  color="secondary" inputProps={{'aria-label' : 'secondary checkbox'
    }}  />}
    label="Testing Checkbox"
    />
  )
}

export const Proof = () => {
  console.log("Component re-rendered")
  const [dummyState,rerender] = React.useState(1);

  const onClick = () => {
      rerender(dummyState + 1);
  }

  React.useEffect( () => {
      console.log("dummyState's state has updated to: " + dummyState)
  }, [dummyState])
  return(
      <div>
          <button onClick={onClick}>reRender</button>
      </div>
  )
}

var HomePage = () => {

  const classes = useStyles();
  const [userName, setUserName] = useState('');

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Container style={{border: " 4px solid #a4cc38 ", height: "350px", marginTop:"50px", width: "90%",}}>
      <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{marginBottom:"15px", marginTop: "15px",}}
      >
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{width: "300px"}}>
          <InputLabel htmlFor="outlined-adornment-username" required style={{color: "black"}}>Username</InputLabel>
          <OutlinedInput
             InputLabelProps={{
              className: classes.testLabel
            }}
            classes={{root: classes.outlinedInput}}
            style={{color: "black", backgroundColor: "white"}}
            id="outlined-adornment-password"
            value={userName}
            onChange={handleInputChange}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            labelWidth={70}
            required
          />
        </FormControl>



      <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{width: "300px"}}>
          <InputLabel style={{color: "black"}} htmlFor="outlined-adornment-password" required>Password</InputLabel>
          <OutlinedInput
            style={{color: "black", backgroundColor: "white"}}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            required
          />
        </FormControl>

      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
      <Button onClick={() => getUserInfo(userName)} startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 14, width: "250px", marginTop: "10px" }} className={classes.root} component={Link} to="/login">
      Login
      </Button>
      </Grid>
      <Grid item>
      <Button startIcon={<AddIcon style={{position:"relative",left:"5px"}} />} variant="contained" className={classes.root2} style={{fontSize: 14, marginTop: "25px", width: "250px"}} component={Link} to="/registration">
      Sign Up
      </Button>
      </Grid>
      </Grid>
    <Grid container justify="center" style={{marginTop: "75px"}}>
   <img className={classes.image} src="https://myfecimages.s3-us-west-1.amazonaws.com/%E2%80%94Pngtree%E2%80%94children+holding+hands+earth_1556323.png" />
   </Grid >

      </Container>

    </div>
  );
}



{/* <FormControl style={{color: "white"}}>
<InputLabel htmlFor="my-input2" style={{color: "white"}}>Password
</InputLabel>
<Input required type="password"  id="my-input2" style={{color: "white", width:"300px"}} aria-describedby="my-helper-text" />
</FormControl> */}

export default HomePage;