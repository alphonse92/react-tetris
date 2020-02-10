import configureStore from './configure'
import { getInitialState } from '../services/Store';

export const Store = configureStore(getInitialState());