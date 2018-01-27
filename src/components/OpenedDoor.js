import React from 'react';

const OpenedDoor =
  ({ close }) =>
    <div>
      <div className="door open">
        <p>The door is open</p>
      </div>
      
      <button onClick={close}>Close</button>
    </div>;

export default OpenedDoor;