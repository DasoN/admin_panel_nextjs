import initilaState from './initialState'
import {SET_LOGIN, SET_REGISTRATION} from './variables'

export default function (state = initilaState, action) {
    switch (action.type) {
        case SET_LOGIN:
            if (state.loginUser.id != 0){
                state.loginUser = {
                    id: 0,
                    name: '',
                    isLogin: false
                }
                return state
            }
            state.users.map(user => {
                if (user.username == action.payload.username && user.password == action.payload.password){
                    state.loginUser = {
                        id: user.id,
                        name: action.payload.username,
                        isLogin: true
                    } 
                    return state
                }
            })

            return state
        case SET_REGISTRATION:
            state.users.push({
                id: Date.now().toString(),
                username: action.payload.username,
                password: action.payload.password
            })
            return state
        
        default:
            return state;
    }
}