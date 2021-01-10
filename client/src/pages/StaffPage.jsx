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
import {StaffDialog} from '../modals';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginTop: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px'
  },
  item: {
    flexGrow: 1
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

var StaffPage = () => {
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
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  // state variables for check box
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false
  });

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
      className={classes.item}
      >
      <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12} align="center">
      <Button startIcon={<AccessTimeIcon/>} variant="contained" className={classes.root} onClick ={CoronaCheckIn}>
      Check in/Check out
      </Button>
      </Grid>
      <Grid item xs={12} align="center">
      <Paper style={{width: "80%", marginTop:"20px"}} elevation={3} variant="outlined" square>
         <Grid container>
         <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Smith</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Johnson</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer", position:"relative", right:"2px"}}>Lorwanphet</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>


        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Norderhaug</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Galettly</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer", position:"relative", right:"2px"}}>Oumbre</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Johnson</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedG} onChange={handleChange} name="checkedG" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer"}}>Curry</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedH} onChange={handleChange} name="checkedH" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer", position:"relative", right:"2px"}}>Thompson</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedI} onChange={handleChange} name="checkedI" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>

        <Grid container item xs={5} lg={2} md={2} direction="column" align="left" justify="flex-start" alignItems="flex-start">
        <Button component={Link} to="/FamilyCheckIn" startIcon={<CloudUploadIcon />} color="primary" style={{cursor:"pointer", position:"relative", right:"2px"}}>Jordan</Button>
        <FormControlLabel style={{alignItems: "center", marginBottom: "-10px", position:"relative", top :"-15px"}}
        control={<Checkbox checked={state.checkedJ} onChange={handleChange} name="checkedJ" style={{position:"relative", left :"5px", color: "#a4cc38"}} />}
        label="Checked in"
        />
        </Grid>


        </Grid>
      </Paper>
      </Grid>

      </Grid>
      <Box align="center">
      <IconButton aria-label="checkIn">
      <StaffDialog selectedValue={selectedValue} open={open} onClose={handleClose} date={date.time} />
      <SvgIcon>
      <path d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z" />
      </SvgIcon>
      </IconButton>
      </Box>
      </Grid>
    </div>
  );
}

export default StaffPage;
