import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import App from './App';

describe('Traffic lights at an intersection', () => {
  let wrapper;
  let fakeApp;

  beforeEach(() => {
    wrapper = shallow(<App />);
    fakeApp = mount(<App />);
  });

  it('should have 4 traffic light elements', () => {
    expect(wrapper.find('TrafficLight')).to.have.length(4);
  });

  it('should only be active between 9am and 9:30am', () => {
    expect(fakeApp.state().isActive).to.equal(false);
  });

  //
  // it('should change lights every 5 minutes while active', () => {
  //
  // });
  //
  // it('should display the yellow light for 30 seconds', () => {
  //
  // });
  //
  // it('should switch from red to green', () => {
  //
  // });
  //
  // it('should switch form green to red', () => {
  //
  // });

});
