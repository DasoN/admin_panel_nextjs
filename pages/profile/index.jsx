//components imports 
import Main from '../../components/Main'
import Login from '../../components/Login'

//next.js imports
import Head from 'next/head'
import {useRouter} from 'next/router'
import React from 'react'
import {connect} from 'react-redux'


function Home({user}) {
    const router = useRouter()
    if (user.id != 0){
        router.push('profile/' + user.id)
    }
  return (
    <Main>
        <h1>You are not loggin in now!</h1>
    </Main>
  )
}

function putStateToProps(state){
    return {
        user: state.loginUser
    }
}

export default connect(putStateToProps)(Home)
