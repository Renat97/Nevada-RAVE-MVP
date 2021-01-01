import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  }

});

ReactDOM.render(<ThemeProvider theme={theme}> <App/> </ThemeProvider>, document.getElementById('app'));