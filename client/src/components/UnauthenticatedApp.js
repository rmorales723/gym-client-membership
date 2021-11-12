import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import LandingPage from './LandingPage'
import LogIn from './LogIn'
import SignUp from './SignUp'
// import NewMemberForm from './NewMemberForm'
// import Members from './Members'
// import LandingPage from './LandingPage'


function UnauthenticatedApp(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <LandingPage setCurrentUser={props.setCurrentUser} />
        </Route>


        <Route exact path="/signUp">
          <SignUp setCurrentUser={props.setCurrentUser} />
        </Route>
        <Route exact path='/*' component={LandingPage} />
      </Switch>
    </div >
  )
}

export default UnauthenticatedApp;



