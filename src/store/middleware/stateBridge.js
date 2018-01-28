const stateBridge = store => next => action => {
    // Run parallel state request if it exists
    if (action.parallelStateRequest) next({ type: action.parallelStateRequest });

    // Run next state process
    return next(action);
};

export default stateBridge;