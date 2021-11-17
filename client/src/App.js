import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import {BrowserRouter as Router} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import EditMember from './components/EditMember'
// import Member from './components/Member'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [data, setData] = useState(false)



  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((gym) => {
            setCurrentUser(gym)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}
  return (
     <Router>
       <Navbar/>
    
      {currentUser ? (
          <AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />
          
        )
      }
     
     </Router>
   
  )
}

export default App;
