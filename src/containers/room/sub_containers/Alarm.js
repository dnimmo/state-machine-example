import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  stateTypes,
  disarm as disarmFunction,
  arm as armFunction,
  trigger as triggerFunction,
} from '../../../store/room/alarm';

import ArmedAlarm from '../../../components/ArmedAlarm';
import DisarmedAlarm from '../../../components/DisarmedAlarm';
import TriggeredAlarm from '../../../components/TriggeredAlarm';

const Alarm = 
  ({ 
    _stateType, 
    disarm,
    arm,
    trigger,
  }) => {
    switch(_stateType) {
      case stateTypes.ARMED:
        return (
          <ArmedAlarm 
            disarm={disarm}
          />);

      case stateTypes.DISARMED: 
        return (
          <DisarmedAlarm
            arm={arm} 
          />);

      case stateTypes.TRIGGERED:
        return (
          <TriggeredAlarm 
            disarm={disarm}
          />);

      default: 
        return null;
    }
  };

const mapStateToProps = 
  ({ alarm }) => ({
    _stateType: alarm._stateType,
  });

const mapDispatchToProps =
  dispatch => 
    bindActionCreators(
      {
        arm: armFunction,
        disarm: disarmFunction,
        trigger: triggerFunction,
      }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Alarm);