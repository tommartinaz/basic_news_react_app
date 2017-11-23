import {
    FETCH_ARTICLES_SUCCESS
} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ARTICLES_SUCCESS:
            return action.payload.data.articles;
        default:
            return state;
    }
}