import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './index.scss';

const TrafficLight = (props) => {
  const classNames = classnames('trafficLight', props.direction);

  return (
    <div className={classNames}>
      <div className={`trafficLight_signal ${props.lightOneState ? 'stop' : ''}`} />
      <div className={`trafficLight_signal ${props.lightTwoState ? 'getReady' : ''}`} />
      <div className={`trafficLight_signal ${props.lightThreeState ? 'go' : ''}`} />
    </div>
  );
};

TrafficLight.propTypes = {
  direction: PropTypes.string.isRequired,
  lightOneState: PropTypes.bool.isRequired,
  lightTwoState: PropTypes.bool.isRequired,
  lightThreeState: PropTypes.bool.isRequired,
};

export default TrafficLight;
