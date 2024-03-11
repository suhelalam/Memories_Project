import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse} from 'redux';
import {thunk} from 'redux-thunk';

import reducers from './reducers';

import App from './App';
import './index.css';
import { compose } from 'redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// React to create the interface components while ReactDom to handle those component in the web browser env
ReactDOM.render(
    <Provider store={store}>
        <App></App> 
    </Provider>,

    document.getElementById('root')
);