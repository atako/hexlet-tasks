import React from 'react' // eslint-disable-line
import {render} from 'react-dom' // eslint-disable-line
import {Provider} from 'react-redux' // eslint-disable-line
import {createStore} from 'redux' // eslint-disable-line
import reducers from './reducers';
import App from './components/App.jsx'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// BEGIN (write your solution here)
render( 
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('container')
)
// END
