import React, {useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {Container, Box, Grid, Card, Accordion, Paper} from '@material-ui/core';
import {Header, Footer} from '../layouts';
import ControlledAccordions from '../components/ControlledAccordion.jsx';
import Toolbar from '@material-ui/core/Toolbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import Table from '../components/Table.jsx';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  typographyOne: {
    textDecoration: 'underline'
  },
  typographyTwo: {
    fontWeight: 'bold'
  },
  Grid: {
    backgroundColor: '#231f20',
    padding: 0,
    '& .MuiGrid-root': {
      paddingRight: '0px',
      marginTop: '10px',
      marginBottom: '10px'
    },
    '& .MuiPaper-root': {
    }
  },
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginRight: 4,
    borderRadius: 15,
    color: 'white',
    fontSize: '12px',
    height: '25px',
    marginBottom: '5px'
  }
}))

const VolunteerHours = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header></Header>
      <Grid align="center">
      <Grid item container xs={12} md={6} lg={4} style={{width: '95%'}} >
      <Table/>
      </Grid>
      </Grid>
      <Grid container classes={{root: classes.Grid}} style ={{marginTop: '10px', alignContent: 'center'}} spacing={0} alignContent="center" align="center">
      <Grid xs = {6} item align="center">
        <Card align="center" style ={{width: '60%'}}>
          <Typography variant="h4">Quarter One Hours</Typography>
          <Typography classes={{root: classes.typographyTwo}}  variant="subtitle2">July-September</Typography>
          <Typography classes={{root: classes.typographyOne}}>Total Hours: 275 </Typography>
        </Card>
      </Grid >
      <Grid xs = {6} item align="center">
        <Card align="center" style ={{width: '60%'}}>
          <Typography variant="h4">Quarter Two Hours</Typography>
          <Typography  classes={{root: classes.typographyTwo}} variant="subtitle2">October-December</Typography>
          <Typography classes={{root: classes.typographyOne}}>Total Hours: 460 </Typography>
        </Card>
      </Grid >
      <Grid xs = {6} item align="center">
        <Card align="center" style ={{width: '60%'}}>
          <Typography variant="h4">Quarter Three Hours</Typography>
          <Typography classes={{root: classes.typographyTwo}} variant="subtitle2">January-March</Typography>
          <Typography classes={{root: classes.typographyOne}} >Total Hours: 460 </Typography>
        </Card>
      </Grid >
      <Grid xs = {6} item align="center">
        <Card align="center" style ={{width: '60%'}}>
          <Typography variant="h4">Quarter Four Hours</Typography>
          <Typography classes={{root: classes.typographyTwo}} variant="subtitle2">April-June</Typography>
          <Typography classes={{root: classes.typographyOne}}>Total Hours: 310 </Typography>
        </Card>
      </Grid>
      <Grid xs = {12} item align="center">
        <Card align="center" style ={{width: '35%'}}>
          <Typography variant="h3">Yearly Total</Typography>
          <Typography classes={{root: classes.typographyOne}}>Total Hours: 1505</Typography>
          <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} component={Link} to="/login">
          Go back
          </Button>
        </Card>
      </Grid>
      </Grid >

    </Fragment>
  )

};


export default VolunteerHours;