import React, {useState, Fragment} from 'react';
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
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #a4cc38, #a4cc38)',
    border: 0,
    marginBottom: 5,
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

var HomePage = () => {
  const classes = useStyles();
  return (
    <div style={{backgroundColor: '#302b2c'}}>
      <Header>
      </Header>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
      <Button startIcon={<AddIcon />} variant="contained" className={classes.root} style={{fontSize: 12}}>
      Register
      </Button>
      <Button startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root}>
      Login
      </Button>
      </Grid>
      <Container fixed>
        <h1 style={{backgroundColor: "blue"}}>Hello</h1>
      </Container>
    </div>
  );
}

export default HomePage;