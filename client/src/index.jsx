import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { ThemeProvider } from '@material-ui/core/styles';
import {createStore, combineReducers} from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux'

export const store = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a4cc38",
    },
    secondary: {
      main: "#a4cc38",
    },
  }

});

ReactDOM.render(
<Provider store={store}>
<ThemeProvider theme={theme}>
<App store={store}/>
</ThemeProvider>
</Provider>,
document.getElementById('app'));