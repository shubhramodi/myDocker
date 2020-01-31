import {combineReducers} from 'redux'
import personReducer from "./methods/PersonReducer"

const makeCombineReducers = (asyncReducers) => {
    return combineReducers({
        personReducer,
        ...asyncReducers
    })
};

export default makeCombineReducers;
