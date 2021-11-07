import React from 'react'
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import LandingPage from './LandingPage'
import LogIn from './LogIn'
import SignUp from './SignUp'
// import NewMemberForm from './NewMemberForm'
// import Members from './Members'
// import LandingPage from './LandingPage'


function UnauthenticatedApp(setCurrentUSer) {
  return (
    <div><Router>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path="/logIn">
      <LogIn setCurrentUser={setCurrentUSer} />
      </Route>


      <Route exact path="/signUp">
        <SignUp setCurrentUser={setCurrentUSer}/>
      </Route>  
      <Route exact path='/*' component={LandingPage}/>
  </Switch>
   </Router>
    
    {/* <h1>hello</h1> */}
    
    </div >
  )
}

export default UnauthenticatedApp;