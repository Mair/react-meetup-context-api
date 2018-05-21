import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 4 import the provider and wrap the app / components in it
import { MouseProvider } from './context';

ReactDOM.render(
  <MouseProvider>
    <App />
  </MouseProvider>,
  document.getElementById('root')
);
