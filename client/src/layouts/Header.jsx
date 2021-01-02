import React, {useState} from 'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#231f20'
  },
  typography: {
    marginTop: '11px',
  },
}));

var Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Grid container direction="row" justify="space-between" alignItems="flex-start" height="0">
      <Typography className={classes.typography}  variant="h6" color="inherit">
        Nevada R.A.V.E
      </Typography>
      <Box>
      <img src="https://nnrff.org/wp-content/uploads/RAVE_icon_noBG-1024x731.png" width="100" height="50" alt=""></img>
      </Box>
      </Grid>
    </Toolbar>
  </AppBar>
  );
}

export default Header;