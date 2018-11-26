import {FETCH_POSTS,NEW_POST,REMOVE_POST} from '../actions/types';

const initialState = {
    items: [],
    item :{}    
}

export default function (state = initialState, {type, payload}){
    switch(type){
        case FETCH_POSTS:
        return {
            ...state,
            items: payload
        }
        case NEW_POST: 
        return {
            ...state,
            item: {
                type:NEW_POST,
                payload:payload
            }
        }
        case REMOVE_POST: 
        return {
            ...state,
            item: {
                type:REMOVE_POST,
                payload:payload
            }
        }
        default: return state;
    }
}