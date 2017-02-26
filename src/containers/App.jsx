import React, { Component } from 'react';
import Moment from 'moment';
import { extendMoment } from 'moment-range';
import { Header, Footer, TrafficLight } from 'components';
import consts from '../consts';

const moment = extendMoment(Moment);
const startDate = new Date();
const endDate = new Date();

startDate.setHours(consts.startHour, consts.startMinute, '00', '00');
endDate.setHours(consts.endHour, consts.endMinute, '00', '00');

const siteName = 'Traffic Lights';

class App extends Component {

  static shouldbeActive() {
    return moment().isBetween(startDate, endDate);
  }

  constructor(props) {
    super(props);
    this.interval = null;
    this.isActive = false;
    this.yellowLightDuration = consts.yellowLightDuration;
    this.trafficLightDuration = consts.trafficLightDuration;
    this.state = {
      activePair: 1,
      trafficLights: {
        pair1: {
          stop: consts.lightStates.OFF,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.OFF,
        },
        pair2: {
          stop: consts.lightStates.OFF,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.OFF,
        },
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (App.shouldbeActive() && !this.isActive) {
        this.startApp();
      } else if (!App.shouldbeActive() && this.isActive) {
        this.stopApp();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stopApp();
  }

  getReady(pairId) {
    if (this.isActive) {
      this.changeState(`pair${pairId}`, 'getReady');
      setTimeout(() => {
        this.go(pairId);
      }, 3000);
    }
  }

  go(pairId) {
    if (this.isActive) {
      const otherPairId = pairId === 1 ? 2 : 1;
      this.changeState(`pair${pairId}`, 'go');
      this.changeState(`pair${otherPairId}`, 'stop');
      this.setState({ activePair: pairId });
    }
  }

  startApp() {
    // set app to active
    this.isActive = true;

    // start the first pair
    this.changeState('pair1', 'go');

    // set a timeout for the first getReady
    setTimeout(() => {
      this.getReady(this.state.activePair === 1 ? 2 : 1);
    }, this.trafficLightDuration - this.yellowLightDuration);

    // set an interval to change to lights going forward
    this.interval = setInterval(() => {
      this.go(this.state.activePair === 1 ? 2 : 1);
      setTimeout(() => {
        this.getReady(this.state.activePair === 1 ? 2 : 1);
      }, this.trafficLightDuration - this.yellowLightDuration);
    }, this.trafficLightDuration);

    this.setState({
      trafficLights: {
        pair1: {
          stop: consts.lightStates.OFF,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.ON,
        },
        pair2: {
          stop: consts.lightStates.ON,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.OFF,
        },
      },
    });
  }

  stopApp() {
    // set app to active
    this.isActive = false;

    // clear the running interval
    clearInterval(this.interval);

    // set the traffic lights to off
    this.setState({
      activePair: null,
      trafficLights: {
        pair1: {
          stop: consts.lightStates.OFF,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.OFF,
        },
        pair2: {
          stop: consts.lightStates.OFF,
          getReady: consts.lightStates.OFF,
          go: consts.lightStates.OFF,
        },
      },
    });
  }

  changeState(pairId, nextState) {
    switch (nextState) {
      case 'stop':
        this.setState({
          trafficLights: Object.assign({}, this.state.trafficLights, {
            [pairId]: {
              stop: consts.lightStates.ON,
              getReady: consts.lightStates.OFF,
              go: consts.lightStates.OFF,
            },
          }),
        });
        break;
      // eslint-disable-next-line no-case-declarations
      case 'getReady':
        const otherPairId = pairId === 'pair1' ? 'pair2' : 'pair1';
        this.setState({
          trafficLights: Object.assign({}, this.state.trafficLights, {
            [pairId]: Object.assign({}, this.state.trafficLights[pairId], {
              getReady: consts.lightStates.ON,
            }),
            [otherPairId]: Object.assign({}, this.state.trafficLights[otherPairId], {
              getReady: consts.lightStates.ON,
            }),
          }),
        });
        break;
      case 'go':
        this.setState({
          trafficLights: Object.assign({}, this.state.trafficLights, {
            [pairId]: {
              stop: consts.lightStates.OFF,
              getReady: consts.lightStates.OFF,
              go: consts.lightStates.ON,
            },
          }),
        });
        break;
      default:
    }
  }

  render() {
    return (
      <div>
        <Header name={siteName} />
        <main>
          <TrafficLight direction="north" lightOneState={this.state.trafficLights.pair1.stop} lightTwoState={this.state.trafficLights.pair1.getReady} lightThreeState={this.state.trafficLights.pair1.go} />
          <TrafficLight direction="south" lightOneState={this.state.trafficLights.pair1.stop} lightTwoState={this.state.trafficLights.pair1.getReady} lightThreeState={this.state.trafficLights.pair1.go} />
          <TrafficLight direction="east" lightOneState={this.state.trafficLights.pair2.stop} lightTwoState={this.state.trafficLights.pair2.getReady} lightThreeState={this.state.trafficLights.pair2.go} />
          <TrafficLight direction="west" lightOneState={this.state.trafficLights.pair2.stop} lightTwoState={this.state.trafficLights.pair2.getReady} lightThreeState={this.state.trafficLights.pair2.go} />
        </main>
        <Footer name={siteName} />
      </div>
    );
  }
}

export default App;
