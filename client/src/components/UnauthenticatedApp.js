import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import NewMemberForm from './NewMemberForm'
import Members from './Members'


function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div>
    <Switch>
      <Route exact path="/login" component={LogIn}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route to="/" component={Members}/>
    </Switch>
   
    
    <h1>hello</h1>
    
    </div>
  )
}

export default UnauthenticatedApp;