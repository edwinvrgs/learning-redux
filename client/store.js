import { createStore, compse} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

//Import reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//Default data

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);