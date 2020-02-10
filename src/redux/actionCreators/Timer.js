import {
  SET_TICK,
  SET_PAUSE,
  SET_INTERVAL,
  SET_STOP,
} from '../actions/Timer'

export function setTick(payload) {
  return { type: SET_TICK, payload }
}
export function setPause(payload) {
  return { type: SET_PAUSE, payload }
}
export function setStop(payload) {
  return { type: SET_STOP, payload }
}
export function setInterval(payload) {
  return { type: SET_INTERVAL, payload }
}
