import {connect} from 'react-redux'
import Registration from '../components/Containers/RegistrationContainer'
import {onRegistrationProfile} from '../store/variables'

function RegistrationRoute({users, onRegistrationProfile}){
    return (
        <Registration users={users} onRegistrationProfile={onRegistrationProfile}/>
    )
}

function putStateToProps(state){
  return {
      users: state.users
  }
}

export default connect(putStateToProps, {
  onRegistrationProfile
})(RegistrationRoute)