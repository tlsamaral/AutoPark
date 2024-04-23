import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from '@radix-ui/themes';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Theme
    className="h-full w-full"
    appearance="dark"
    panelBackground="translucent"
  >
    <App />
  </Theme>
);
