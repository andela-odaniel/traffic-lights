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

  it('should switch to green on go', () => {
    sinon.spy(App.prototype, 'go');
    const fakeAppInstance = fakeApp.instance();
    fakeAppInstance.isActive = true;
    fakeAppInstance.go(2);
    expect(App.prototype.go).to.have.property('callCount', 1);
    expect(fakeApp.state().trafficLights.pair2.go).to.be.true;
    expect(fakeApp.state().trafficLights.pair2.stop).to.be.false;
    expect(fakeApp.state().trafficLights.pair2.getReady).to.be.false;
  });

  it('should switch to orange on ready', () => {
    sinon.spy(App.prototype, 'getReady');
    const fakeAppInstance = fakeApp.instance();
    fakeAppInstance.isActive = true;
    fakeAppInstance.getReady(2);
    expect(App.prototype.getReady).to.have.property('callCount', 1);
    expect(fakeApp.state().trafficLights.pair2.getReady).to.be.true;
    expect(fakeApp.state().trafficLights.pair2.stop).to.be.false;
    expect(fakeApp.state().trafficLights.pair2.go).to.be.false;
  });

  it('should switch other pair lights to red  on go', () => {
    const fakeAppInstance = fakeApp.instance();
    fakeAppInstance.isActive = true;
    fakeAppInstance.go(2);
    expect(App.prototype.go).to.have.property('callCount', 2);
    expect(fakeApp.state().trafficLights.pair2.go).to.be.true;
    expect(fakeApp.state().trafficLights.pair1.getReady).to.be.false;
    expect(fakeApp.state().trafficLights.pair1.stop).to.be.true;
  });
});
