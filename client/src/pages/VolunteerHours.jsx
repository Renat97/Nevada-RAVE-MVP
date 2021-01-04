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

const VolunteerHours = () => {

  return (
    <Fragment>
      <Header></Header>
      <Grid align="center">
      <Grid item container xs={12} md={6} lg={4} style={{width: '95%'}} >
      <Table/>
      </Grid>
      </Grid>
      <Grid container style ={{marginTop: '10px'}} spacing={2}  >
      <Grid xs = {6}item>
        <Card>
          <Typography>Quarter one hours: July-September</Typography>
        </Card>
      </Grid >
      <Grid xs = {6} item>
        <Card>
          <Typography>Quarter Two Hours: October -december</Typography>
        </Card>
      </Grid>
      <Grid xs = {6} item>
      <Card>
      <Typography>Quarter Three Hours: January - March</Typography>
      </Card>
      </Grid>
      <Grid xs = {6} item>
      <Card>
      <Typography>Quarter Four Hours: April - June</Typography>
      </Card>
      </Grid>
      </Grid>

      <Typography>Total Hours: </Typography>
    </Fragment>
  )

};


export default VolunteerHours;