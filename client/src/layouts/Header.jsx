import React, {useState, useEffect} from 'react';
import {AppBar, Menu, MenuItem, Popper, Grow, Paper, MenuList} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#231f20',
    color: "white"
  },
  typography: {
    marginTop: '11px',
  },
}));




var Header = () => {
  const classes = useStyles();

  const reloadPage = () => {
    window.location.reload();
  }

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar className={classes.appBar}position="static">
    <Toolbar>
      <IconButton edge="start" aria-label="menu" style={{color: "white"}} ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}>
      <MenuIcon />
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList style={{zIndex: 1000}}autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>Beta V1</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </IconButton>
      <Grid container direction="row" justify="space-between" alignItems="flex-start" height="0">
      <Typography className={classes.typography} style={{color: "white"}}  variant="h6" color="secondary">
        Nevada RAVE
      </Typography>
      <Box  component={Link} to="/">
      <img src="https://nnrff.org/wp-content/uploads/RAVE_icon_noBG-1024x731.png" width="100" height="50" alt=""></img>
      </Box>
      </Grid>
    </Toolbar>
  </AppBar>
  );
}

export default Header;