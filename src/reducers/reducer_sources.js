import {
    FETCH_SOURCES_SUCCESS
} from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_SOURCES_SUCCESS:
            return action.payload.data.sources;
        default:
            return state;
    }
}