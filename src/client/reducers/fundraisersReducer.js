import { FETCH_FUNDRAISERS } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_FUNDRAISERS:
            return action.payload.data;
        default:
            return state;
    }
};
 