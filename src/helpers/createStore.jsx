import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';
import { API_BASE_URL } from '../constants';

export default req => {
    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: { cookie: req.get('cookie') || '' }
    });
    const store = createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
    return store;
};
