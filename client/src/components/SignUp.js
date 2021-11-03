import React, { useState } from 'react'
import { useHistory, Link, withRouter } from 'react-router-dom'

function SignUp(props) {
    // const history = useHistory()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      })
      .then(res => {
        if (res.ok) {
          res.json().then(gym => {
            props.setCurrentUser(gym)
            // history.push('/members')
            props.history.push('/members')
          })
        } else {
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
    }
  
    return (
      <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit">Submit</button>
          <p><Link to="/">LogIn</Link></p>
      </form>
    );
  } 

  export default withRouter(SignUp);