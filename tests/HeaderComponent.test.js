import React from 'react';
import Enzyme, { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Header} from '../client/src/layouts';
import {Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import sinon from 'sinon';
import HomePage from '../client/src/pages/index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('HeaderComponent', () => {
  it('renders Hender component without crashing', () => {
    shallow(<Header/>)
  });
  it("Header component contains the correct image", () => {
    const wrapper = shallow(<Header/>);
    const header = (<img src="https://nnrff.org/wp-content/uploads/RAVE_icon_noBG-1024x731.png" width="100" height="50" alt=""></img>);
    expect(wrapper.contains(header)).toEqual(true);
  })
  it("Header component has a button that is clickable", () => {
    var test = 0;
    const wrapper = shallow((<Header/>));
    var button = wrapper.find('.IconButtonClass');
    do {
    button.simulate('click');
    test++;
    } while(test < 1);
    expect(test).toBe(1);
  });

});