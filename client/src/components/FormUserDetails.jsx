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
import ChildrenForm from './ChildrenForm.jsx';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    height: "95%"
  },
  grid: {
    color: "black"
  },
  formControl: {
    margin: theme.spacing(3),
  },
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginBottom: '10px',
    borderRadius: 15,
    color: 'white',
    fontSize: '12px'
  },
  typography: {
    fontWeight: 800,
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  formControlTwo: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[500]
    }
  }
})


export var FormUserDetails = (props) => {
const [state, setstate] = useState()
const classes = useStyles();

var continueNext = (e) => {
  e.preventDefault();
  props.nextStep();
}
const { values, nextStep, handleChange, handleButtonChange } = props;
return (
    <Fragment>
      <Paper align="center" className={classes.paper}>
      <Typography variant="h3" className={classes.typography}>Family Check In Part 1</Typography>
      <Grid container alignItems="center" justify="center" align="center" className={classes.grid}>
      <Grid item container spacing={1} alignItems="flex-end" justify="center">
      <Grid item>
            <AccountCircle />
      </Grid>
      <Grid item>
      <TextField  required label="Gaurdian One" onChange={(e) => { handleChange('gaurdianOneName',e)}}
      defaultValue={values.gaurdianOneName}
      />
      </Grid>
      </Grid>


      <Grid item container spacing={1} alignItems="flex-end" justify="center">
      <Grid item>
            <AccountCircle />
      </Grid>
      <Grid item>
      <TextField  required label="Gaurdian Two" onChange={(e) => { handleChange('gaurdianTwoName',e)}}
      defaultValue={values.gaurdianTwoName}
      />
      </Grid>
      </Grid>


    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel required  component="legend" color="secondary">1) Is anyone in the family experiencing the following symptoms: </FormLabel>
        <Grid container alignItems="center" justify="center">
        <FormGroup>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom1} onChange={handleButtonChange} name="symptom1" />}
            label="Fever of 100.4 degrees +"
          />
          </Grid>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom2} onChange={handleButtonChange} name="symptom2" />}
            label="Dry cough"
          />
          </Grid>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom3} onChange={handleButtonChange} name="symptom3" />}
            label="Shortness of breath"
          />
          </Grid>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom4} onChange={handleButtonChange} name="symptom4" />}
            label="Chills"
          />
          </Grid>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom5} onChange={handleButtonChange} name="symptom5" />}
            label="Loss of taste or smell"
          />
          </Grid>
          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom6} onChange={handleButtonChange} name="symptom6" />}
            label="Sore throat"
          />
          </Grid>

          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom7} onChange={handleButtonChange} name="symptom7" />}
            label="Muscle aches"
          />
          </Grid>

          <Grid item container>
          <FormControlLabel
            control={<Checkbox checked={values.symptom8} onChange={handleButtonChange} name="symptom8" />}
            label="Other flu like symptoms"
          />
          </Grid>
        </FormGroup>
        </Grid>
      </FormControl>


        <Grid item container justify="center">
        <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} onClick={nextStep}>
        Next
      </Button>
        </Grid>
      </Grid>


      </Paper>
    </Fragment>
)
};



export var FormPersonalDetails = (props) => {
  const classes = useStyles();
  const [children, setChildren] = useState('');

  const { values, nextStep, handleChange, handleRadioButtonChange } = props;
  return (
  <Fragment>
        <Paper align="center" className={classes.paper}>
        <Typography variant="h3" className={classes.typography}>Family Check In Part 2</Typography>
        <Grid container alignItems="center" justify="center" align="center" className={classes.grid}>
          <Grid container item alignItems="center" justify="center">
          <FormControl component="fieldset">
          <FormLabel required component="legend" classes={{root: classes.grid, focused: classes.grid, filled: classes.grid}} >
 2. To the best of your knowledge, within the past 14 days have you or someone in your household come into contact with someone who has been advised to self-isolate, quarantine, or has tested positive, or is presumed positive for Covid-19?
          </FormLabel>
          <RadioGroup aria-label="gender" name="question2" onChange={handleRadioButtonChange}>
          <Grid container alignItems="center" justify="center">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </Grid>
          </RadioGroup>
          </FormControl>
          </Grid>


          <Grid container item alignItems="center" justify="center">
          <FormControl component="fieldset">
          <FormLabel required component="legend" classes={{root: classes.grid, focused: classes.grid, filled: classes.grid}} >
 3. Within the past 14 days, have you traveled out of Nevada?
          </FormLabel>
          <RadioGroup aria-label="gender" name="question3" onChange={handleRadioButtonChange}>
          <Grid container alignItems="center" justify="center">
          <FormControlLabel value="yes" control={<Radio />} label="yes" />
          <FormControlLabel value="no" control={<Radio />} label="no" />
          </Grid>
          </RadioGroup>
          </FormControl>
          </Grid>

          <Grid item>
            <Typography variant="subtitle2">Please enter the number of children you are checking in today: </Typography>
          </Grid>

          <Grid item container spacing={1} alignItems="flex-end" justify="center">

          <Grid item>
          <FormControl className={classes.formControlTwo}>
          <InputLabel id="demo-simple-select-label"># of Children</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="children"
          onChange={(e) => {handleRadioButtonChange(e)}}
          >
          <MenuItem name="children" value={1}>One</MenuItem>
          <MenuItem name="children" value={2}>Two</MenuItem>
          <MenuItem name="children" value={3}>Three</MenuItem>
          <MenuItem name="children" value={4}>Four</MenuItem>
          <MenuItem name="children" value={5}>Five</MenuItem>
          <MenuItem name="children" value={6}>Six</MenuItem>
          <MenuItem name="children" value={7}>Seven</MenuItem>
          <MenuItem name="children" value={8}>Eight</MenuItem>
          </Select>
          </FormControl>
          </Grid>
          </Grid>

          <Grid item container justify="center">
          <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} onClick={nextStep}>
          Next
          </Button>
          </Grid>



        </Grid>
      </Paper>
  </Fragment>
  )
  }

