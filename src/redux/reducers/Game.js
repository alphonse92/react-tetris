import { createReducer } from '../../services/Store'
import {
  SET_ROWS,
  SET_COLS,
  SET_LEVEL,
} from '../actions/Game'

const INIT = {
  cols: 10,
  rows: 30,
  level: 1,
}

const reducerMap = {
  [SET_ROWS]: (store, action) => ({ ...store, ...{ rows: action.payload } }),
  [SET_COLS]: (store, action) => ({ ...store, ...{ cols: action.payload } }),
  [SET_LEVEL]: (store, action) => ({ ...store, ...{ level: action.payload } }),
}

export default createReducer(INIT, reducerMap)