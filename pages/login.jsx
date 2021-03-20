import Login from '../components/Containers/LoginContainer'
import {onLoginProfile} from '../store/variables'
import {connect} from 'react-redux'

function LoginRoute({loginUser, onLoginProfile}){
    return (
        <Login loginUser={loginUser} onLoginProfile={onLoginProfile}/>
    )
}


function putStateToProps(state){
    return {
        loginUser: state.loginUser
    }
}

export default connect(putStateToProps, {
    onLoginProfile
})(LoginRoute)