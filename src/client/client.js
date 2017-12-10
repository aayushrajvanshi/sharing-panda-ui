import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from './Routes';
import reducers from './reducers';
import { API_BASE_URL } from '../constants';

// Styles
import './styles/app.scss';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(
    reducers,
    window.__INITIAL_STATE__,
    compose(
        applyMiddleware(thunk.withExtraArgument(axiosInstance)),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

delete window.__INITIAL_STATE__;

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

