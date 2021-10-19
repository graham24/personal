import coinbase from '../apis/coinbase';
import github from '../apis/github';

export const fetchBTCPrice = () => async (dispatch, getState) => {
    const response = await coinbase.get(`/btc-USD/spot`)

    dispatch(
        {
            type: 'FETCH_PRICE',
            payload: response.data.data
        }
    )
};

export const selectJob = job => {
    return {
        type: 'JOB_SELECTED',
        payload: job
    };
};

export const fetchProjects = () => async (dispatch, getState) => {
    const response = await github.get('/slopeside-graham/repos')

    dispatch(
        {
            type: 'FETCH_PROJECTS',
            payload: response.data
        }
    )
};