import React from 'react';
import Enzyme, { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../client/pages/index.js';
import App from '../client/src/components/App.jsx';
import {Header} from '../client/src/layouts';

Enzyme.configure({ adapter: new Adapter() });

describe('AppComponent', () => {
  it('renders App component without crashing', () => {
    shallow(<App/>)
  });
  it("renders App component header without crashing", () => {
    const wrapper = shallow(<Header/>);
    
  })

});