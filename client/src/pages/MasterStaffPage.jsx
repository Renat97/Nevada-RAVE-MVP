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

var MasterStaffPage = () => {
return (
  <Fragment>
    <Header>

    </Header>
    <Grid container spacing={4} alignItems="center" justify="center">
      <Grid item xs={12}>
        <Paper align="center">
          <h1>Volunteers</h1>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <h1>Family</h1>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <h1>Staff</h1>
        </Paper>
      </Grid>
    </Grid>
  </Fragment>
)

};

export default MasterStaffPage;