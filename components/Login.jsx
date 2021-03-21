import {connect} from 'react-redux'
import { useRouter } from 'next/router'
import { InputLabel, Input, InputAdornment, IconButton, Button} from '@material-ui/core';
import React from 'react'
import Main from '../components/Main';

export default function LoginForm({ loginUser, onLoginProfile}){

    const router = useRouter()
    const [values, setValues] = React.useState({
        showPassword: 'password',
        user: '',
        password: '',
      });

      const handleClickShowPassword = () => {
        
      };


      const onLoginHandler = () => {
            onLoginProfile(values.user, values.password)
            router.push('/profile')
      }

    return (
        <Main>
            <h1>Login form</h1>
            <br/>
                <form>
                    <InputLabel htmlFor="standard-user">Username</InputLabel>
                    <Input
                        id="standard-user"
                        type="text"
                        value={values.user}
                        onChange={ev => setValues({user: ev.target.value})}
                        name="user"
                    />
                    <br/>
                    <br/>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={ev => setValues({...values, password: ev.target.value})}
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
        </Main>
                
    )
}