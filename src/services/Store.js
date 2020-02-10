export const getInitialState = () => ({})
export const createActionName = (module, event) => `${module}.${event}`;
export const noReducerDefault = (state) => state
export const createReducer = (INIT, functionsMap, reducerDef = noReducerDefault) => (state, action) => !state
  ? INIT
  : functionsMap[action.type]
    ? functionsMap[action.type](state, action)
    : reducerDef(state, action)