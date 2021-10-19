import coinbase from '../apis/coinbase';
import { userGet, readmeGet } from '../apis/github';

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
    const response = await userGet.get('/graham24/repos')

    dispatch(
        {
            type: 'FETCH_PROJECTS',
            payload: response.data
        }
    )
};

export const fetchProjectREADME = (repo, branch) => async (dispatch, getState) => {
    const response = await readmeGet.get('/graham24/' + repo + '/' + branch + '/README.md')

    dispatch(
        {
            type: 'FETCH_PROJECTREADME',
            payload: response.data
        }
    )
};