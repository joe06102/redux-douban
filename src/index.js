import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import './index.css';
import App from './app';
import reducers from './reducers'

const store = createStore(reducers, {}, applyMiddleware(Thunk))
ReactDOM.render(<App store={store}/>, document.getElementById('root'))