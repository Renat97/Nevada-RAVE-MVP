import React, {useState, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import {Header, Footer} from '../layouts';
import HistoryIcon from '@material-ui/icons/History';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText, SvgIcon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'
import {SimpleDialog} from '../modals';


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginTop: 4,
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

const InitialValues = {
  month: '',
  year: '',
  day: '',
  date: '',
  hours: '',
  minutes: '',
  seconds: '',
  time: ''
}

var VolunteerLogin = () => {
  const classes = useStyles();
  const emails = ['username@gmail.com', 'user02@gmail.com'];
  // state for date
  const [date, setDate] = useState(InitialValues);
  // state for Dialog modal
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('checkOut');

  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }
  const handleHours = (num) => {
    let time = 'am';
    if(num >= 12) {
      time = 'pm';
    }
    return time;
  }
  const americanTime = (num) => {
  let hours = 0;
   switch(true) {
     case num > 12:
       hours = num - 12;
       hours = `${hours}`
       break;
     case num < 12:
       hours = `${num}`
       break;
   }
  if(num === 0) {
    hours = 12;
  }
  if(num === 12) {
    hours = 12;
  }

  return hours;
  }

  const CoronaCheckIn = (event) => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let day = today.getDate();
    let date = `${month}/${day}/${year}`;
    let hour = today.getHours();
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let ending = handleHours(hour);
    let hours = americanTime(hour);

    let time = `${hours}:${minutes}:${seconds} ${ending}`;

    setDate({
     month,
     year,
     day,
     date,
     hours,
     minutes,
     seconds,
     time
    })

    handleClickOpen();
  }

  const handleClickOpen = () => {
    if(selectedValue === 'checkOut') {
      setSelectedValue('checkIn')
    }
    if(selectedValue === 'checkIn') {
      setSelectedValue('checkOut')
    }
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Grid
      container
      spacing={0}
      direction="column"
      justify="center"
      style={{marginBottom:"15px", marginTop: "15px"}}
      >
      <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} align="center">
      <Button startIcon={<AccessTimeIcon/>} variant="contained" className={classes.root} onClick ={CoronaCheckIn}>
      Check in/Check out
      </Button>
      </Grid>
      <Grid item xs={12} align="center">
      <Button startIcon={<HistoryIcon/>} variant="contained"  className={classes.root} component={Link} to="/volunteerLogin">
      View Hours
      </Button>
      </Grid>

      </Grid>
      <Box align="center">
      <IconButton aria-label="checkIn">
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} date={date.time} />
      <SvgIcon>
      <path d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z" />
      </SvgIcon>
      </IconButton>
      </Box>
      </Grid>
    </div>
  );
}

export default VolunteerLogin;
