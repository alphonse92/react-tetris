import { combineReducers } from 'redux'
import timer from './Timer'
import game from './Game'

export default combineReducers({
  timer,
  game,
})