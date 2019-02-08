import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import './lib/fontawesome-config';
import Main from './main';
import * as serviceWorker from './serviceWorker';
import './assets/scss/main.scss';

// Description: Set up store configurations
const store = configureStore();
ReactDOM.render(
  <Main store={store} />,
  document.getElementById('root'));

serviceWorker.unregister();