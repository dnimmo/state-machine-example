import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
  stateTypes,
  close as closeFunction,
  open as openFunction,
  lock as lockFunction,
  unlock as unlockFunction, 
} from '../store/door';

import OpenedDoor from '../components/OpenedDoor';
import ClosedDoor from '../components/ClosedDoor';
import LockedDoor from '../components/LockedDoor';

const Door = 
  ({ 
    _stateType, 
    open,
    close,
    lock,
    unlock,
  }) => {
    switch(_stateType) {
      case stateTypes.OPENED:
        return (
          <OpenedDoor 
            close={close} 
          />);

      case stateTypes.CLOSED: 
        return (
          <ClosedDoor 
            open={open} 
            lock={lock}
          />);

      case stateTypes.LOCKED:
        return (
          <LockedDoor 
            unlock={unlock}
          />);

      default: 
        return null;
    }
  };

const mapStateToProps = 
  ({ door }) => ({
    _stateType: door._stateType,
  });

const mapDispatchToProps =
  dispatch => 
    bindActionCreators(
      {
        open: openFunction,
        close: closeFunction,
        lock: lockFunction,
        unlock: unlockFunction,
      }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Door);