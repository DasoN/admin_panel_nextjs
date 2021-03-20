import Main from '../../components/Main'
import {connect} from 'react-redux'
import { useRouter } from 'next/router'
import React from 'react'

function Profile({state}) {
    const router = useRouter()
    const userState = {
      id: 0,
      username: '',
    }
      state.map(user => {
        if (user.id == router.query.id){
          userState.username = user.username
          userState.id = user.id
        }
      })
    return (
      <Main>
        <h1>Your name is {userState.username}</h1>
      </Main>
    )
  }

function putStateToProps (state) {
    return {
        state: state.users
    }
}

export default connect(putStateToProps)(Profile)