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

const InitialValues = {
  symptom1: '',
  symptom2: '',
  symptom3: '',
  symptom4: '',
  symptom5: '',
  symptom6: '',
  symptom7: '',
  symptom8: ''
}
const values = {
  signature: '',
  staffSignature: ''
}

export function RadioButtonsGroup(props) {
  const [values, setValues] = useState(InitialValues);
  const [decision, setDecision] = useState(0);
  const [decision1, setDecision1] = useState(0);
  const [decision2, setDecision2] = useState(0);
  const [decision3, setDecision3] = useState(0);
  const [decision4, setDecision4] = useState(0);
  const [decision5, setDecision5] = useState(0);
  const [decision6, setDecision6] = useState(0);
  const [decision7, setDecision7] = useState(0);
  const [decision8, setDecision8] = useState(0);

  const classes = useStyles();

  const handleChange = (event) => {
    const {name, value, checked} = event.target;
    setValues({
    ...values,
    [name]: 'yes'
    })
  }

  const [form2, setform2] = React.useState('');
  const [form3, setform3] = React.useState('');
  const [form4, setform4] = React.useState('');
  const [form5, setform5] = React.useState(values);

  const handleChange2 = (event) => {
    setform2(event.target.value);
  };
  const handleChange3 = (event) => {
    setform3(event.target.value);
  };
  const handleChange4 = (event) => {
    setform4(event.target.value);
  };
  const handleChange5 = (event) => {
    const {name, value} = event.target
    setform5({
      ...form5,
      [name]: value
    })
  }

  return (
    <Fragment>
  <Grid container
  style={{
    margin: 0,
    width: '100%',
  }}>
    <FormControl component="fieldset">
      <FormLabel component="legend" classes= {{focused: classes.form}}>Are you or anyone in the family experiencing the following symptoms?</FormLabel >
      <RadioGroup aria-label="covid" name="covid" value={values} onChange={handleChange}>
        <FormControlLabel value={InitialValues.symptom1} control={<Radio checked = { decision === 1 ? true : false} onChange={() => setDecision(1)} />} label="Fever of 100.4 degrees or higher" name="symptom1"/>
        <FormControlLabel value={InitialValues.symptom2} control={<Radio checked = { decision1 === 1 ? true : false} onChange={() => setDecision1(1)} />} label="Dry Cough" name="symptom2"/>
        <FormControlLabel value={InitialValues.symptom3} control={<Radio checked = { decision2 === 1 ? true : false} onChange={() => setDecision2(1)}/>} label="Shortness of Breath" name="symptom3" />
        <FormControlLabel value={InitialValues.symptom4} control={<Radio checked = { decision3 === 1 ? true : false} onChange={() => setDecision3(1)} />} label="Chills" name="symptom4" />
        <FormControlLabel value={InitialValues.symptom5} control={<Radio checked = { decision4 === 1 ? true : false} onChange={() => setDecision4(1)} />} label="Loss of taste or smell" name="symptom5" />
        <FormControlLabel value={InitialValues.symptom6} control={<Radio checked = { decision5 === 1 ? true : false} onChange={() => setDecision5(1)}/>} label="Sore throat" name="symptom6" />
        <FormControlLabel value={InitialValues.symptom7} control={<Radio checked = { decision6 === 1 ? true : false} onChange={() => setDecision6(1)} />} label="Muscle aches" name="symptom7" />
        <FormControlLabel value={InitialValues.symptom8} control={<Radio checked = { decision7 === 1 ? true : false} onChange={() => setDecision7(1)} />} label="Other flu like symptoms" name="symptom8" />
      </RadioGroup>
    </FormControl>
    </Grid>
    <Grid container
  style={{
    margin: 0,
    width: '100%',
  }}>
    <FormControl component="fieldset">
    <FormLabel component="legend"> To the best of your knowledge, within the past 14 days have you or someone in your household come into contact with someone who has been advised to self-isolate, quarantine, or has tested positive, or is presumed positive for Covid-19?</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={form2} onChange={handleChange2}>
    <Grid container direction="row" justify="center" alignItems="center">
     <Grid item container sm={3}>
      <FormControlLabel value="yes" control={<Checkbox />} label="yes" onChange={handleChange2}/>
      </Grid>
      <Grid item container sm={3}>
      <FormControlLabel value="no" control={<Checkbox />} label="no" onChange={handleChange2} />
      </Grid>
    </Grid>
    </RadioGroup>
    </FormControl>
    </Grid>
    <Grid container
  style={{
    margin: 0,
    width: '100%',
  }}>
    <FormControl component="fieldset">
    <FormLabel component="legend">  Within the past 14 days, have you traveled out of Nevada? If your answer is "yes," please note the areas you have traveled to within the past 14 days</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={form3} onChange={handleChange3}>
    <Grid container direction="row" justify="center" alignItems="center">
     <Grid item container sm={3}>
      <FormControlLabel value="yes" control={<Checkbox />} label="yes" onChange={handleChange3}/>
      </Grid>
      <Grid item container sm={3}>
      <FormControlLabel value="no" control={<Checkbox />} label="no" onChange={handleChange3} />
      </Grid>
    </Grid>
    </RadioGroup>
    </FormControl>
    </Grid>

    <Grid container style={{ margin: 0, width: '100%'}}>
    <FormControl component="fieldset">
    <FormLabel component="legend"> Fever Check (under 100.4)</FormLabel>
    <RadioGroup aria-label="gender" name="gender1" value={form4} onChange={handleChange4}>
    <Grid container direction="row" justify="center" alignItems="center" style={{width: '520px'}}>
     <Grid item container sm={3}>
      <FormControlLabel value="yes" control={<Checkbox />} label="yes" onChange={handleChange4}/>
      </Grid>
      <Grid item container sm={3}>
      <FormControlLabel value="no" control={<Checkbox />} label="no" onChange={handleChange4} />
      </Grid>
    </Grid>
    </RadioGroup>
    </FormControl>
    </Grid>

    <Grid container direction="row" justify="flex-start" alignItems="flex-start" style={{height: '20%',margin: 0, width: '100%',}}>
    <Grid item container sm={3}>
    <TextField variant="outlined" name="signature" value={values.signature} className={classes.form} label="signature" InputProps={{
           style: {
             color: "black",
             fontFamily: 'Arizonia'
           }
         }} onChange={handleChange5}>
    </TextField>
    </Grid>
    <Grid item container sm={3} style={{padding: 0, margin: 0, width: '100%'}}>
    <TextField variant="outlined" name="staffSignature" value={values.staffSignature} className={classes.form} label="staff signature"  InputProps={{
           style: {
             color: "black",
             fontFamily: "Arizonia"
           }
         }} onChange={handleChange5}>
    </TextField>
    </Grid>
    <Grid item container sm={3} style={{margin: 0, width: '100%'}}>
      <Button align="center" startIcon={<ExitToAppIcon />} variant="contained"  style={{fontSize: 12}} className={classes.root} onClick={props.handleClose}>
      Submit
    </Button>
    </Grid>
    </Grid>

    </Fragment>

  );
}



export function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, date } = props;

  const DialogConditionalOne = (props) => {
    return (
    <Fragment>
    <DialogTitle className={classes.title}>Checked in!</DialogTitle>
    <Typography align="center" className={classes.text}> {date} </Typography >
    <RadioButtonsGroup handleClose = {props.handleClose}/>
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

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default SimpleDialog;

