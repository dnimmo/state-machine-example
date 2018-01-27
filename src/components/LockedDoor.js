import React from 'react';

const LockedDoor =
  ({ unlock }) => 
    <div>
      <p>The door is locked</p>
      <button onClick={unlock}>Unlock</button>
    </div>;

export default LockedDoor;