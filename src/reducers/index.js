import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import shiftReducer from './shiftReducer';


export default combineReducers({
    form:formReducer,
    shifts:shiftReducer
})