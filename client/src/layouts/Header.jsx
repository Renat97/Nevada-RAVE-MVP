import React, {useState} from 'react';
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#231f20'
  }
}));

var Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Nevada R.A.V.E
      </Typography>
    </Toolbar>
  </AppBar>
  );
}

export default Header;