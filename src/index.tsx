import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {CustomContextProvider} from "./contexts/CustomContext";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
function preRenderSetup(callback) {
  callback();
  serviceWorker.unregister();
}

function renderRootComponent() {
  ReactDOM.render(
    <BrowserRouter>
      <CustomContextProvider>
        <App />
      </CustomContextProvider>
    </BrowserRouter>,
    document.getElementById('root'));
}

preRenderSetup(renderRootComponent);
