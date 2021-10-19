import coinbase from '../apis/coinbase';

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
