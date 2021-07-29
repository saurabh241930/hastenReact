import { CREATE_DATA,FETCH_SHIFTS } from "../actions/types";
import _ from 'lodash';




export default (state ={},action) => {
    switch(action.type){
        case CREATE_DATA:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_SHIFTS:
            return {...state,..._.mapKeys(action.payload,'id')}
        default:
            return state;
    }
}


