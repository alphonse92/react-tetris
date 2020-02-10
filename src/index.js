import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './components/App';
import { Store } from './redux'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
)