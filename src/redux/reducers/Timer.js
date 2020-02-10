import { createReducer } from './../../services/Store'
import {
  SET_TICK,
  SET_PAUSE,
  SET_INTERVAL,
  SET_STOP,
} from '../actions/Timer'

const INIT = {
  tick: 0,
  stop: false,
  pause: false,
  interval: 1000
}

const reducerMap = {
  [SET_TICK]: (store, action) => ({ ...store, ...{ tick: action.payload } }),
  [SET_STOP]: (store, action) => ({ ...store, ...{ stop: action.payload } }),
  [SET_PAUSE]: (store, action) => ({ ...store, ...{ pause: action.payload } }),
  [SET_INTERVAL]: (store, action) => ({ ...store, ...{ interval: action.payload } }),
}

export default createReducer(INIT, reducerMap)