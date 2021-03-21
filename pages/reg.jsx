import {connect} from 'react-redux'
import Registration from '../components/Containers/RegistrationContainer'
import {onRegistrationProfile, onLoginProfile} from '../store/variables'

function RegistrationRoute({users, onRegistrationProfile, onLoginProfile}){
    return (
        <Registration users={users} onRegistrationProfile={onRegistrationProfile} onLoginProfile={onLoginProfile}/>
    )
}

function putStateToProps(state){
  return {
      users: state.users
  }
}

export default connect(putStateToProps, {
  onRegistrationProfile, onLoginProfile
})(RegistrationRoute)