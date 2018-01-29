const stateBridge = 
  store => 
    next => 
      action => {
        const shouldBroadcastAction =
          action.broadcastAction !== undefined

        if (shouldBroadcastAction) {
            next({ type: action.broadcastAction })
        };

        return next(action);
      };

export default stateBridge;