import { combineReducers } from 'redux';
import reducer_articles from './reducer_articles';
import reducer_sources from './reducer_sources';

const rootReducer = combineReducers({
    articles: reducer_articles,
    sources: reducer_sources
})

export default rootReducer;