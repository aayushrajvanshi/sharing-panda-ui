// const fs = require('fs');

// fs.readdirSync(__dirname + '/api/').forEach((file) => {
//     require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
// });

import { combineReducers } from 'redux';
import fundraisersReducer from './fundraisersReducer';
import petitionReducer from './petitionReducer';
import authReducer from './authReducer';

export default combineReducers({
    fundraisers: fundraisersReducer,
    petitions: petitionReducer,
    auth: authReducer
});