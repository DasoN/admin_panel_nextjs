import Main from '../components/Main'
import { InputLabel, Input, InputAdornment, IconButton, Button} from '@material-ui/core';
import React from 'react'
import {connect} from 'react-redux'

function Reg({state}) {
  const [values, setValues] = React.useState({
    showPassword: 'password',
    name: '',
    email: '',
    password: '',
  });

  function sendData (){
    console.log('dsllkj')
  }

  const handleClickShowPassword = () => {
    
  };
    return (
      <Main>
          <form>
                    <InputLabel htmlFor="standard-email">Email</InputLabel>
                    <Input
                        id="standard-email"
                        type="text"
                        value={values.email}
                        onChange={ev => setValues({email: ev.target.value})}
                        name="email"
                    />
                    <br/>
                    <br/>
                    <InputLabel htmlFor="standard-name">Username</InputLabel>
                    <Input
                        id="standard-name"
                        type="text"
                        value={values.name}
                        onChange={ev => setValues({name: ev.target.value})}
                        name="name"
                    />
                    <br/>
                    <br/>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={ev => setValues({password: ev.target.value})}
                        name="password"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            >
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    <br/>
                    <br/>
                    <Button variant="contained" onClick={sendData} color="primary" href="#contained-buttons">
                        Login
                    </Button>
                </form>
      </Main>
    )
  }

function putStateToProps (state) {
    return {
        state
    }
}

export default connect(putStateToProps)(Reg)