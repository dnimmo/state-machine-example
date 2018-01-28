import React from 'react';
import Alarm from './sub_containers/Alarm';
import Door from './sub_containers/Door';

const Room =
  () => 
    [
      <div class="doorPanel">
        <Door />
      </div>,
      <div class="alarmPanel">
        <Alarm />
      </div>,
    ]
    

export default Room;