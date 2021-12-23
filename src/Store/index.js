import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer as todoReducer } from './reducer';
import { reducer as newGroupReducer } from './NewGroup/index.js';

const rootReducer = combineReducers({
    todo: todoReducer,
    newList: newGroupReducer,
});

const enhancers = composeWithDevTools(
    applyMiddleware(thunk),
);

const store = createStore(rootReducer, enhancers);

export { store };