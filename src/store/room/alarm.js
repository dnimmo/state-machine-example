export
const actionTypes = {
  ARM: 'ARM',
  DISARM: 'DISARM',
  TRIGGER: 'TRIGGER',
};


export
const stateTypes = {
  ARMED: { 
    name: 'ARMED', 
    availableActions: [actionTypes.DISARM, actionTypes.TRIGGER] 
  },
  DISARMED: { 
    name: 'DISARMED', 
    availableActions: [actionTypes.ARM] 
  },
  TRIGGERED: { 
    name: 'TRIGGERED', 
    availableActions: [actionTypes.DISARM] 
  },
};


const initialState = {
  _stateType: stateTypes.ARMED,
};


export
const arm = 
  () => ({ 
    type: actionTypes.ARM,  
  });


export
const disarm =
  () => ({ 
    type: actionTypes.DISARM,  
  });


export
const trigger =
  () => ({ 
    type: actionTypes.TRIGGER,  
  });


const alarm =
  (state = initialState, action) => {
    const actionIsAllowed =
    state._stateType.availableActions.includes(action.type);

    if(!actionIsAllowed) return state;

    switch(action.type) {
      case actionTypes.ARM: 
        return { _stateType: stateTypes.ARMED };

      case actionTypes.DISARM:
        return { _stateType: stateTypes.DISARMED };

      case actionTypes.TRIGGER:
        return { _stateType: stateTypes.TRIGGERED };

      default: 
        return state;
    }
  };

export default alarm;