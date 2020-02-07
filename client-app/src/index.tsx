import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import {BrowserRouter} from'react-router-dom'
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { Call } from './app/layout/Call';

ReactDOM.render(<BrowserRouter><Call /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
