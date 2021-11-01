import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './components/AuthenticatedApp'
import UnauthenticatedApp from './components/UnauthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  const [currentUser, setCurrentUser] = useState({
    "id": 1,
    "name": "Krank",
    "number": "551-358-0500",
    "address": "60 Colombus Ave",
    "email": "mike@krank.com",
    "user_id": null,
    "password_digest": null
    })
  const [authChecked, setAuthChecked] = useState(true)

  // useEffect(() => {
  //   fetch('/me', {
  //     credentials: 'include'
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((gym) => {
  //           setCurrentUser(gym)
  //           setAuthChecked(true)
  //         })
  //       } else {
  //         setAuthChecked(true)
  //       }
  //     })
  // }, [])

  if(!authChecked) { return <div></div>}
  return (
    <Router>
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
