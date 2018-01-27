import React from 'react';

const OpenedDoor =
  ({ close }) =>
    <div>
      <p>The door is open</p>
      <button onClick={close}>Close</button>
    </div>;

export default OpenedDoor;