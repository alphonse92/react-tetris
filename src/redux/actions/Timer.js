import { createActionName } from "../../services/Store";

const modulename = 'timer'

export const SET_TICK = createActionName(modulename,'SET_TICK')
export const SET_PAUSE =   createActionName(modulename,'SET_PAUSE')
export const SET_STOP =    createActionName(modulename,'SET_STOP')
export const SET_INTERVAL = createActionName(modulename,'SET_INTERAL')

