import Main from '../components/Main'
import { InputLabel, Input, InputAdornment, IconButton, Button} from '@material-ui/core';
import { useRouter } from 'next/router'
import React from 'react'

export default function Reg({users ,onRegistrationProfile, onLoginProfile}) {
  const route = useRouter()
  const [values, setValues] = React.useState({
    showPassword: 'password',
    name: '',
    password: '',
  });

  function sendData (){
      onRegistrationProfile(values.name, values.password)
      onLoginProfile(values.name, values.password)
      route.push('/profile/')
  }

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: 'text'})
  };
    return (
      <Main>
            <h1>Registration form</h1>
            <br/>
                <form>
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
                        onChange={ev => setValues(prev => ({
                          ...prev,
                           password: ev.target.value
                          }))}
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
                    <Button variant="contained" onClick={sendData} color="primary">
                        Registration 
                    </Button>
                </form>
      </Main>
    )
  }