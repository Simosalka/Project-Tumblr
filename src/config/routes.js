import React from 'react'
import Dashboard from '../Screens/dashboard'
import AddPost from '../Screens/addPost'

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/addPost' component={AddPost}></Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default Routes
