import Login from '../Login'
import {connect} from 'react-redux'

export default ({loginUser, onLoginProfile}) => {
    console.log('jlkasjl')
    console.log(onLoginProfile)
    return (
            <Login loginUser={loginUser} onLoginProfile={onLoginProfile}/>
    )
}
