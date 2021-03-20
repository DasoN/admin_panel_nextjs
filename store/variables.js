export const SET_LOGIN = 'SET_LOGIN'
export const SET_REGISTRATION = 'SET_REGISTRATION'

export const onLoginProfile = (username, password) =>({
    type: SET_LOGIN,
    payload: {
        username,
        password
    }
}) 

export const onRegistrationProfile = (username, password) =>({
    type: SET_REGISTRATION,
    payload: {
        username,
        password
    }
}) 