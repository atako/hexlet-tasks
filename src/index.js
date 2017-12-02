import React from 'react' // eslint-disable-line
import { render } from 'react-dom' // eslint-disable-line
import { Provider } from 'react-redux' // eslint-disable-line
import thunk from 'redux-thunk'; // eslint-disable-line
import { createStore, applyMiddleware, compose } from 'redux'; // eslint-disable-line
import reducers from './reducers';
import App from './components/App.jsx';
import { fetchTasks } from './actions';

const devtoolMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  compose(
    // BEGIN (write your solution here)
    applyMiddleware(thunk),
    // END
    devtoolMiddleware,
  ),
);
/* eslint-enable */

store.dispatch(fetchTasks());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container'),
);
