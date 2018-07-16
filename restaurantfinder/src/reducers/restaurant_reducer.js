import {GET_RESTAURANTS} from '../actions/index';

 
export default function (state = [], action) {
    switch(action.type) {

        case GET_RESTAURANTS:
            return [action.payload.data];

        default:
            return state;
    }
}