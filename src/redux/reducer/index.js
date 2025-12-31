import { movieReducer } from "./movie";
import { combineReducers } from 'redux';


const reducers = combineReducers ( {
    movies : movieReducer
})

export default reducers