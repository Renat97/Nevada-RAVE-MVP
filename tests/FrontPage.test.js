import React from 'react';
import Enzyme, { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Header} from '../client/src/layouts';
import {Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import sinon from 'sinon';
import HomePage from '../client/src/pages/index.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Front Pages functionality', () => {
it('has a label of username on the button', () => {

});



})