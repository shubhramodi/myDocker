import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import thunk from 'redux-thunk';
import makeCombineReducers from "../reducers";

const createStore = () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const logger = store => {
        return next => {
            return action => {
                console.log("[Middleware] Dispatching -> ", action);
                const result = next(action);
                console.log("[Middleware] Next State -> ", store.getState());
                return result;
            }
        }
    };

    const middleware = [thunk, logger];

    return createReduxStore(makeCombineReducers(), composeEnhancers(applyMiddleware(...middleware)));
};

export default createStore;


