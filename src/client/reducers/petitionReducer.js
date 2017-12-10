import { FETCH_PETITIONS } from '../actions';

const initialState = {
    data: [],
    isFetching: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PETITIONS:
            return {
                ...state,
                data: action.payload.data.docs,
                isFetching: false
            }
        default:
            return state;
    }
};
