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
import { palette, spacing, typography } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { Container, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image'
import { FormControl, InputLabel, Input, FormHelperText, Paper } from '@material-ui/core';
import VolunteerForm from '../components/VolunteerForm.jsx';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
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

var Registration = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Paper variant="outlined" className={classes.pageContent}>
      <VolunteerForm>
      </VolunteerForm>
      </Paper>
    </div>
  );
}

export default Registration;