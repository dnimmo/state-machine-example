import React from 'react';

const LockedDoor =
  ({ unlock }) => 
    <div>
      <div className="door locked">
        <p>The door is locked</p>
      </div>
      
      <button onClick={unlock}>Unlock</button>
    </div>;

export default LockedDoor;