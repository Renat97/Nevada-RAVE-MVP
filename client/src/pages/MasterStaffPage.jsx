import React, {Fragment, useState} from 'react';
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
import { Container, Button, Paper} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText, SvgIcon, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom'
import {SimpleDialog} from '../modals';
import Calendar from 'react-calendar';
import { Inject,ScheduleComponent,Day, Week, WorkWeek, Month, Agenda, EventSettingsModel} from '@syncfusion/ej2-react-schedule';


export function MasterStaff() {

  var data = new EventSettingsModel;



  return (
    <div>

    </div>
  )
}



var MasterStaffPage = () => {
return (
  <Fragment>
    <Header>

    </Header>
    <Container style={{ marginTop: "75px"}}>
    <ScheduleComponent currentView="Month">
      <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
    </Container>

  </Fragment>
)

};

export default MasterStaffPage;