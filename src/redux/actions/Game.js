import { createActionName } from "../../services/Store";

const modulename = 'game'

export const SET_ROWS = createActionName(modulename, 'SET_ROWS')
export const SET_COLS = createActionName(modulename, 'SET_COLS')
export const SET_LEVEL = createActionName(modulename, 'SET_LEVEL')
