import React, { Component } from 'react';
import { Header, Footer, TrafficLight } from 'components';
import consts from '../consts';

const siteName = 'Traffic Lights';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      startHour: consts.startHour,
      startMin: consts.startMin,
      endHour: consts.endHour,
      endMin: consts.endMin,
    };
  }

  render() {
    return (
      <div>
        <Header name={siteName} />
        <main>
          <TrafficLight direction="north" />
          <TrafficLight direction="south" />
          <TrafficLight direction="east" />
          <TrafficLight direction="west" />
        </main>
        <Footer name={siteName} />
      </div>
    );
  }
}

export default App;
