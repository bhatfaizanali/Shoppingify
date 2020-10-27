import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from "@chakra-ui/core";

import App from './components/App.js';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider><App /></ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
