import {
  SET_ROWS,
  SET_COLS,
  SET_LEVEL,
} from '../actions/Game'

export function setRows(payload) {
  return { type: SET_ROWS, payload }
}
export function setCols(payload) {
  return { type: SET_COLS, payload }
}
export function setLevel(payload) {
  return { type: SET_LEVEL, payload }
}