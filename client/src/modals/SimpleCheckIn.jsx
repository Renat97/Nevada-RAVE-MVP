import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import {DialogContent, DialogContentText} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import { Checkbox, Container, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialogWrapper: {
    padding: theme.spacing(2),
    position: 'absolute',
    top:'-2%',
    right: '20px',
    left: '-20px',
    overflow:'scroll',
  },
  root: {
    background: 'linear-gradient(90deg, #a4cc38, #a4cc38)',
    border: 0,
    marginTop: '13px',
    borderRadius: 15,
    color: 'white',
    fontSize: '12px'
  },
  text: {
    marginBottom: '5px'
  },
  title: {
    padding: 0,
    textAlign: 'center'
  },
  form: {
      color: 'green',
      '& .MuiOutlinedInput-input': {
        padding: '4px'
      },
      '& .MuiFormLabel-root': {
        position: 'relative',
        left: '-6px'
      }

  }
}));


function SimpleCheckIn(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, date } = props;

  const DialogConditionalOne = (props) => {
    return (
    <Fragment>
    <DialogTitle className={classes.title}>Checked in!</DialogTitle>
    <Typography align="center" className={classes.text}> {date} </Typography >
    </Fragment>
    );
  }
  const DialogConditionalTwo = () => {
    return (
    <Fragment>
    <DialogTitle id="simple-dialog-title" align="center">Checked out!</DialogTitle>
    <Typography align="center"> {date} </Typography>
    </Fragment>
    );
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Fragment>
    <Dialog maxWidth={'sm'} fullWidth={true} style={{margin: 0, width: '100%'}} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} classes={{ paper: classes.dialogWrapper}}>
    <DialogContent style={{ overflow: "scroll", overflowX: "hidden", align: "center"}}>
      {selectedValue ==='checkOut' &&
        <DialogConditionalTwo/>
      }
      {selectedValue ==='checkIn' &&
        <DialogConditionalOne handleClose= {handleClose}/>
      }
    </DialogContent>
    </Dialog>
    </Fragment>
  );
}

SimpleCheckIn.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleCheckIn;