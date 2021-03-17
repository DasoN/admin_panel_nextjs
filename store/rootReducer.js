import initilaState from './initialState'
import {SET_STATE} from './variables'

export default function (state = initilaState, action) {
    switch (action.type) {
        case SET_STATE:
            return {
                ...state,
                name: action.payload
            }
    
        default:
            return state;
    }
}