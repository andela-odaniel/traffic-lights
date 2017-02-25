import React, { Component } from 'react';
import { Header, Footer, TrafficLight } from 'components';

const siteName = 'Traffic Lights';

class App extends Component {
  constructor() {
    super();
    this.setState = {
      val: 0,
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
