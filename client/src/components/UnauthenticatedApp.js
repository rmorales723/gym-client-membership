import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LogIn from './LogIn'
import SignUp from './SignUp'
import NewMemberForm from './NewMemberForm'
import Members from './Members'
import LandingPage from './LandingPage'


function UnauthenticatedApp(props) {
  return (
    <div>
    <Switch>
      
      <Route exact path="/" component={LandingPage}/>


      <Route exact path="/signup">
        <SignUp setCurrentUser={props.setCurrentUser}/>
      </Route>  

    </Switch>
   
    
    <h1>hello</h1>
    
    </div>
  )
}

export default UnauthenticatedApp;