import axios from 'axios';

import {
    FETCH_ARTICLES,
    BASE_URL,
    API_KEY
} from './types';

export const fetch_articles = (filter, val) => {
    console.log("FETCH_ARTICLES_ACTION", filter, val)
    return {
        type: FETCH_ARTICLES,
        payload: axios.get(`${BASE_URL}/top-headlines?apiKey=${API_KEY}&${filter}=${val}`)
    }
}