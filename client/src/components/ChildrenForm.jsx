import React, {Fragment,useState,useEffect} from 'react'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import {AppBar,TextField, raisedButton, Grid} from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Container, Button, Paper, Checkbox, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, FormGroup, Typography} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from 'react-router-dom'



var ChildrenForm = (props) => {

  const useStyles = makeStyles((theme) => ({
    paper: {
      width: "90%",
      height: "95%"
    },
    grid: {
      color: "black"
    },
    container: {
      position: "relative",
      left: "40px"
    },
    newGrid: {
      marginTop: "15px"
    }
  }));

  var initialValues = {
    name: '',
    question1: '',
    question2: '',
    question3: ''
  }
  const [state, setState] = useState(initialValues)
  const classes = useStyles();
  return (
    <div>
      <Paper align="center" className={classes.paper}>
        <Grid item xs={12} sm={12} md={12} lg={12} container alignItems="center" justify="center" align="center" className={classes.grid}>
        <Grid item container spacing={1} alignItems="flex-end" justify="center">
        <Grid item>
            <AccountCircle />
        </Grid>
        <Grid item>
        <TextField  required label="Child's name" onChange={(e) => { setState({ ...state, name : e.target.value}) }}
        />
        </Grid>
        </Grid>

        <Grid item container justify="center" className={classes.newGrid}>
        <FormControl required component="fieldset">
        <FormLabel required component="label" >
           Question 1
          </FormLabel>
          <RadioGroup aria-label="gender" name="question1" onChange={(e) => { setState({ ...state, question1 : e.target.value}) }}>
          <Grid container alignItems="center" justify="center">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </Grid>
          </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item container justify="center">
        <FormControl required component="fieldset">
        <FormLabel required component="label" >
           Question 2
          </FormLabel>
          <RadioGroup aria-label="gender" name="question2" onChange={(e) => { setState({ ...state, question2 : e.target.value}) }}>
          <Grid container alignItems="center" justify="center">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </Grid>
          </RadioGroup>
          </FormControl>
        </Grid>


        <Grid item container justify="center" >
        <FormControl required component="fieldset">
        <FormLabel required component="label" >
           Question 3
          </FormLabel>
          <RadioGroup aria-label="gender" name="question3" onChange={(e) => { setState({ ...state, question3 : e.target.value}) }}>
          <Grid container alignItems="center" justify="center">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </Grid>
          </RadioGroup>
          </FormControl>
        </Grid>

        </Grid>
       </Paper>
    </div>
  );
}

var ChildrenForms = (props) => {

  const useClasses = makeStyles((theme) => ({
    typography: {
      fontWeight: 800,
      textTransform: 'uppercase',
      fontStyle: 'italic',
    },
    paper: {
      width: "90%",
      textAlign: "center",
      margin: "0px"
    },
    grid: {
      color: "black"
    },
    container: {
      textAlign: "center",
      position: "relative",
      left: "20px"
    },
    root: {
      background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
      border: 0,
      marginRight: 4,
      borderRadius: 15,
      color: 'white',
      fontSize: '12px'
    }
  }))
  const classes = useClasses();
  return (
    <Container maxWidth="md" classes={{root: classes.container}} >
    <Paper variant="elevation" align="center" className={classes.paper}>
        <Grid container alignItems="center" justify="center" align="center" className={classes.grid}>
    <Grid item container justify="center">
    <Typography variant="h3" className={classes.typography}>Family Check In Part 3</Typography>
    </Grid>
    <Grid item container justify="center">
    <Typography variant="subtitle2">1. Children age 2 years or older are encouraged to wear a mask during a RAVE session however this will not be required. Is it your preference that your child wears his or her mask?</Typography>
    </Grid>
    <Grid item container justify="center">
    <Typography variant="subtitle2">   2. Hand sanitizer will be used regularly throughout a RAVE session in addition to frequent handwashing. Are you okay with your child(ren) using hand sanitizer? </Typography>
    </Grid>
    <Grid item container justify="center">
    <Typography variant="subtitle2"> 3. Is your child's Temperature under 100.4 degrees Farenheit?</Typography>
    </Grid>
    <Grid container justify="center" direction="row" alignItems="center">
    <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12, marginTop: '10px'}} className={classes.root} onClick={props.prevStep}>
    Back
    </Button>
    <Button startIcon={<ExitToAppIcon />} style={{fontSize: 12, marginTop: '10px'}} className={classes.root} component={Link} to="/login">
      Submit
    </Button>
    </Grid>
    </Grid>
    </Paper>
    {[...Array(props.children)].map((elementInArray, index) =>
      <ChildrenForm key={index}> </ChildrenForm>
    )}
    </Container>
  );

}




export default ChildrenForms;

