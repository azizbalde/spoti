import React, { useEffect } from 'react'

import Signin from '../components/Signin'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()
  if (!formState.username || !formState.password) {
    setErrorMessage('Les champs ne doivent pas etre vide')
    return
  } else {
    localStorage.setItem('token', 'OK')
    history.push('/genres')
  }
}

const Login = props => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    console.log('Login -> props', props)
    console.log(token)
    if (token) {
      props.history.push('/genres')
    }
  }, [])
  return <Signin submit={submit}></Signin>
}

export default Login
