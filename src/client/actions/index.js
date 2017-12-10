export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');
    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const FETCH_FUNDRAISERS = 'fetch_fundraisers';
export const fetchFundraisers = () => async (dispatch, getState, api) => {
    const res = await api.get('/fundraisers');
    dispatch({
        type: FETCH_FUNDRAISERS,
        payload: res
    });
};

export const FETCH_PETITIONS = 'FETCH_PETITIONS';
export const fetchPetitions = () => async (dispatch, getState, api) => {
    const petitions = await api.get('/petitions');
    dispatch({
        type: FETCH_PETITIONS,
        payload: petitions
    });
};