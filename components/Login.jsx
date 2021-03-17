import {connect} from 'react-redux'
import { useRouter } from 'next/router'
import { InputLabel, Input, InputAdornment, IconButton, Button} from '@material-ui/core';
import React from 'react'

function LoginForm({state}){
    const router = useRouter()
    const [values, setValues] = React.useState({
        showPassword: 'password',
        email: '',
        password: '',
      });

      const handleClickShowPassword = () => {
        
      };

      const onLoginHandler = () => {
        state.map(user => {
            if (user.name == values.email && user.password == values.password)
                console.log(user.name)
                router.push('/profile/' + user.id)  
        })
      }

    return (
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
                    <Button variant="contained" onClick={onLoginHandler} color="primary">
                        Login
                    </Button>
                </form>
    )
}

function putStateToProps (state) {
    return {
        state
    }
}

export default connect(putStateToProps)(LoginForm)