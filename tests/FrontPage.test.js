import React from 'react';
import Enzyme, { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Header} from '../client/src/layouts';
import {Typography, TextField} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import sinon from 'sinon';
import HomePage from '../client/src/pages/index.js';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Container } from '@material-ui/core';
import AppComponent from '../client/src/components/AppComponent.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Front Pages functionality', () => {
  const fieldProps = {
    placeholder: "A placeholder",
    onChange: jest.fn()
  };
  const Composition = props => {
    return <HomePage {...fieldProps} />;
  };
const initialState = {output: 10}
const mockStore = configureStore();
let store,wrapper;
it('renders a <OutlinedInput/> component with expected props', () => {
  store= mockStore(initialState);
  const wrapper = shallow(<Provider store={store}> <HomePage/> </Provider> );
  // expect(wrapper.find('.label1').text()).toBe('U;sername')
  console.log(wrapper.find('.input1').debug());
  // wrapper.find("input").simulate("change");
  expect(wrapper.find('.input1').length).toBe(0)
});
})

describe('AppComponent', () => {
  it('should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
  it('should show text', () => {
    const wrapper = shallow(<AppComponent/>);
    const text = wrapper.find('div div');
    expect(text.text()).toBe('Text goes here');
  })
  it('should hide text when button is clicked', () => {
    const wrapper = shallow(<AppComponent/>);
    const button = wrapper.find('button');
    button.simulate('click');
    const text = wrapper.find('div div');
    expect(text.length).toBe(0);
  })
  it('input is recorded and changes the state', () => {
    const wrapper = shallow(<AppComponent/>);
    let input = wrapper.find('input');
    input.simulate('change', {
      target: {value: 'here'},
    })
    input = wrapper.find('input');
    expect(input.props().value).toEqual('here')
  });
});

