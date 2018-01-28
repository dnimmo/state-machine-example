import React from 'react';

const DisarmedAlarm =
  ({ arm }) => 
    <div>
      <p>DISARMED</p>
      <button onClick={arm}>Arm</button>
    </div>;

export default DisarmedAlarm;