import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './index.scss';

const TrafficLight = (props) => {
  const classNames = classnames('trafficLight', props.direction);

  return (
    <div className={classNames}>
      <div className="trafficLight_signal" />
      <div className="trafficLight_signal" />
      <div className="trafficLight_signal" />
    </div>
  );
};

TrafficLight.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default TrafficLight;
