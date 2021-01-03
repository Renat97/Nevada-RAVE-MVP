import React, {Fragment} from 'react';
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

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});



export function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, date } = props;

  const DialogConditionalOne = () => {
    return (
    <Fragment>
    <DialogTitle id="simple-dialog-title">Checked in!</DialogTitle>
    <Typography align="center"> {date} </Typography>
    </Fragment>
    );
  }
  const DialogConditionalTwo = () => {
    return (
    <Fragment>
    <DialogTitle id="simple-dialog-title">Checked out!</DialogTitle>
    <Typography align="center"> {date} </Typography>
    </Fragment>
    );
  }

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Fragment>
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      {selectedValue ==='checkOut' &&
        <DialogConditionalTwo/>
      }
      {selectedValue ==='checkIn' &&
        <DialogConditionalOne/>
      }
    </Dialog>
    </Fragment>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;