import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Login from '../screens/login'
import PrivateRoute from '../utils/privateRoute'
import Genres from '../screens/Genres/index'
import Musics from '../screens/Musics/index'


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/genres' component={Genres} />
        <PrivateRoute path='/musics' component={Musics} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
