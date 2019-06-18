import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AppTODO from "./components/App";
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Provider store={store}><AppTODO /></Provider>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
