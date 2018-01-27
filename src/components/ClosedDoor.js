import React from 'react';

const ClosedDoor =
  ({ 
    lock, 
    open,
  }) => 
    <div>
      <div className="door closed">
        <p>The door is closed</p>
      </div>

      <button onClick={lock}>Lock</button>
      <button onClick={open}>Open</button>
    </div>;
    
export default ClosedDoor;