import { applyMiddleware, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import monitorReducersEnhancer from './enhancers/monitorReducers'
import loggerMiddleware from './middlewares/logger'
import rootReducer from './reducers'
export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  let composedEnhancers;

  if (process.env.NODE_ENV !== 'production') {
    composedEnhancers = composeWithDevTools(...enhancers)
    module.hot ? module.hot.accept('./reducers', () => store.replaceReducer(rootReducer)) : void (0)
  } else {
    composedEnhancers = compose(...enhancers)
  }

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  return store
}