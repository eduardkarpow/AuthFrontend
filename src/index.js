import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Store from './store/store.ts';
import { createContext } from 'react/cjs/react.production.min';

const store = new Store();

export const Context = createContext({
  store
});

ReactDOM.render(
  <Context.Provider values={{store}}>
     <App />
  </Context.Provider>,
  document.getElementById('root')
);

