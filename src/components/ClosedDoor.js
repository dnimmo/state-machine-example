import React from 'react';

const ClosedDoor =
  ({ 
    lock, 
    open,
  }) => 
    <div>
      <p>The door is closed</p>
      <button onClick={lock}>Lock</button>
      <button onClick={open}>Open</button>
    </div>;
    
export default ClosedDoor;