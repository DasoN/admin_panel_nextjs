import Login from '../Login'

export default ({loginUser, onLoginProfile}) => {
    console.log('jlkasjl')
    console.log(onLoginProfile)
    return (
            <Login loginUser={loginUser} onLoginProfile={onLoginProfile}/>
    )
}
