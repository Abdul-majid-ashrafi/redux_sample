import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/notesReducer';

// export default createStore(rootReducer);
export default createStore(combineReducers({ notes: rootReducer }));