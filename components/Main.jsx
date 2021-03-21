import Header from './Header'
import {connect} from 'react-redux'
import style from '../styles/main.module.css'

function Main({children, username}){
    console.log("My name is " + username)
    return (
        <>
        <Header />
            <main className={style.main}>
                {children}
            </main>
        </>
    )
}

function putStateToProps (state) {
    return {
        username: state.name
    }
}

export default connect(putStateToProps)(Main)