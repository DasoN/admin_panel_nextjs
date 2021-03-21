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
        <h1>Hey {userState.username}</h1>
        <hr/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores temporibus inventore, accusantium minus provident necessitatibus ut quam, error, corporis quaerat dolores quia. Similique ipsam corporis nisi enim mollitia repellat officiis.</p>
      </Main>
    )
  }

function putStateToProps (state) {
    return {
        state: state.users
    }
}

export default connect(putStateToProps)(Profile)