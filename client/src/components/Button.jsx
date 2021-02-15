import React, {Fragment} from 'react'
import { Button as MuiButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: "50px",
    marginTop: "25px",
    color: "white"
  }
}));

export default function Button(props) {
  const makeStyles = useStyles();

  const {text, size, color, variant,onClick} = props;

  return (
    <Fragment>
    <MuiButton
    variant={variant}
    size={size}
    color={color}
    onClick={onClick}
    className={makeStyles.button}
    >
      {text}
    </MuiButton>
    </Fragment>
  )
}


