import Header from './Header'
import {connect} from 'react-redux'

function Main({children, username}){
    console.log("My name is " + username)
    return (
        <>
        <Header />
        {children}
        </>
    )
}

function putStateToProps (state) {
    return {
        username: state.name
    }
}

export default connect(putStateToProps)(Main)