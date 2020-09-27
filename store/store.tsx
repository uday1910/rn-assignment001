import { createStore, combineReducers } from 'redux';
import nameReducers from './Reducers/NameReducer';

const rootReducer = combineReducers({
    name: nameReducers
});

const store = createStore(rootReducer);

export default store;