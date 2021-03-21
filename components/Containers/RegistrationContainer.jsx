import Registation from '../Registration'

export default function Reg({users, onRegistrationProfile, onLoginProfile}) {
  return (
        <Registation users={users} onRegistrationProfile={onRegistrationProfile} onLoginProfile={onLoginProfile}/>
  )
}