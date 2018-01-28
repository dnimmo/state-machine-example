import React from 'react';

const ArmedAlarm =
  ({ disarm }) => 
    <div>
      <p>ARMED</p>
      <button onClick={disarm}>Disarm</button>
    </div>;

export default ArmedAlarm;