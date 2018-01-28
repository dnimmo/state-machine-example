export
const actionTypes = {
  OPEN: 'OPEN',
  CLOSE: 'CLOSE',
  LOCK: 'LOCK',
  UNLOCK: 'UNLOCK',
};

export
const stateTypes = {
  OPENED: { 
    name: 'OPENED', 
    availableActions: [actionTypes.CLOSE] 
  },
  CLOSED: { 
    name: 'CLOSED', 
    availableActions: [actionTypes.OPEN, actionTypes.LOCK] 
  },
  LOCKED: { 
    name: 'LOCKED', 
    availableActions: [actionTypes.UNLOCK] 
  },
};

const initialState = {
  _stateType: stateTypes.CLOSED,
};

export
const open = 
  () => ({ 
    type: actionTypes.OPEN,  
  });

export
const close =
  () => ({ 
    type: actionTypes.CLOSE,  
  });

export
const lock =
  () => ({ 
    type: actionTypes.LOCK,  
  });

export
const unlock =
  () => ({ 
    type: actionTypes.UNLOCK,  
  });

const door =
  (state = initialState, action) => {
    const actionIsAllowed =
      state._stateType.availableActions.includes(action.type);

    if(!actionIsAllowed) return state;

    switch(action.type) {
      case actionTypes.OPEN: 
        return { _stateType: stateTypes.OPENED };

      case actionTypes.CLOSE:
      case actionTypes.UNLOCK:
        return { _stateType: stateTypes.CLOSED };

      case actionTypes.LOCK:
        return { _stateType: stateTypes.LOCKED };

      default: 
        return state;
    }
  };

export default door;