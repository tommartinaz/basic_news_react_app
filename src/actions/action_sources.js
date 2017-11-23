import axios from 'axios';

import {
    FETCH_SOURCES,
    BASE_URL,
    API_KEY
} from './types';

export const fetch_sources = () => {
    console.log("FETCH_SOURCES_FIRED")
    return {
        type: FETCH_SOURCES,
        payload: axios.get(`${BASE_URL}/sources/?apiKey=${API_KEY}&`)
    }
}