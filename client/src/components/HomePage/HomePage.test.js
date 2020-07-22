import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../HomePage';
describe('HomePage', () => {
  it('should render correctly in "debug" mode', () => {
    const HomePage = shallow(<HomePage debug />);
  
    expect(HomePage).toMatchSnapshot();
  });
});