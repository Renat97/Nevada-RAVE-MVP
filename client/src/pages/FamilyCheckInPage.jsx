import React, {Fragment, useState} from 'react';
import {Header, Footer} from '../layouts';
import HistoryIcon from '@material-ui/icons/History';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Container, Button, Paper, Checkbox} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText, SvgIcon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'
import {SimpleCheckIn} from '../modals';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import FamilyForm from '../components/FamilyForm.jsx';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginTop: '10px',
    borderRadius: 15,
    color: 'white',
    fontSize: '12px',
    marginBottom: '10px'
  }
})


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

var FamilyCheckInPage = () => {
  const classes = useStyles();
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
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Grid container justify="center">
      <Button startIcon={<AccessTimeIcon/>} variant="contained" className={classes.root} onClick ={CoronaCheckIn}>
      Check in/Check out
      </Button>
      </Grid>
      <SimpleCheckIn selectedValue={selectedValue} open={open} onClose={handleClose} date={date.time} />
      <Grid container justify="center">
      <FamilyForm/>
      </Grid>
    </div>
  );
}

export default FamilyCheckInPage;
