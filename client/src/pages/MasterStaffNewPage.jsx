import React, {useState, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, TextField, Paper, Typography} from '@material-ui/core';
import Header from '../layouts/Header.jsx';
import Button from '../components/Button.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      margin: theme.spacing(1),
      marginTop: '20px',
    }
  },
  title: {
    textAlign: 'center',
    fontSize: '18px',
  },
  textField: {
    '& .MuiFormControl-root': {
      width: '100%'
    }
  }
}))

const paperStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

const initialValues = {
  gaurdianOne: '',
  gaurdianTwo: '',
  childOne: '',
  childTwo: '',
  childThree: '',
  childFour: '',
  childFive: '',
  childSix: '',
  childSeven: '',
  childEight: ''
}

var MasterStaffNewPage = () => {
  const [values, setValues] = useState(initialValues);
  const classes = useStyles();
  const paper = paperStyles();

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name] : value
    })
  }

  return (
    <Fragment>
      <Header/>
      <Paper className={paper.pageContent}>

      <Typography className={classes.title}>Family Form </Typography>

      <form className={classes.root} autocomplete="off">
          <Grid container>
            <Grid container>
            <Grid item xs={6}>
            <TextField fullWidth={true} variant="outlined" name="gaurdianOne" label="Gaurdian One" value={values.gaurdianOne} onChange={handleInputChange} classes= {{ root: classes.textField}}>
            </TextField>
            </Grid>
            <Grid item xs={6} alignItems>
            <Button variant="contained" color="primary" size="large" text="Submit" />
            </Grid>
            </Grid>

            <Grid container>
            <Grid item xs={6}>
            <TextField fullWidth={true} variant="outlined" name="gaurdianTwo" label="Gaurdian Two" value={values.gaurdianTwo} onChange={handleInputChange} classes= {{ root: classes.textField}}>
            </TextField>
            </Grid>
            <Grid item xs={6} alignItems>
            <Button variant="contained" color="primary" size="large" text="Clear" />
            </Grid>
            </Grid>



            <Grid item xs={6}>
            <TextField variant="outlined" name="childOne" label="Child" value={values.childOne} onChange={handleInputChange}>

            </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" name="childTwo" label="Child" value={values.childTwo} onChange={handleInputChange}>

            </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" name="childThree" label="Child" value={values.childThree} onChange={handleInputChange}>

            </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" name="childFour" label="Child" value={values.childFour} onChange={handleInputChange}>

            </TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" name="childFive" label="Child" value={values.childFive} onChange={handleInputChange}>

            </TextField>
            </Grid>

            <Grid item xs={6}>
            <TextField variant="outlined" name="childSix" label="Child" value={values.childSix} onChange={handleInputChange}>

            </TextField>
            </Grid>

            <Grid item xs={6}>
            <TextField variant="outlined" name="childSeven" label="Child" value={values.childSeven} onChange={handleInputChange}>

            </TextField>
            </Grid>

            <Grid item xs={6}>
            <TextField variant="outlined" name="childEight" label="Child" value={values.childEight} onChange={handleInputChange}>

            </TextField>
            </Grid>
          </Grid>
      </form>
      </Paper>
    </Fragment>
  )

}


export default MasterStaffNewPage;