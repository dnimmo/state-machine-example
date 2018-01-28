import React from 'react';

const TriggeredAlarm =
  ({ disarm }) => 
    <div className="triggered">
      <p>TRIGGERED!</p>
      <button onClick={disarm}>Disarm</button>
    </div>;

export default TriggeredAlarm;