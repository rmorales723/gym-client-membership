import { useState } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogIn({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/logIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {

            setCurrentUser(user);
            history.push('/members')
          })

        } else {
          // setCurrentUser = username
            history.push('/members')
          res.json().then(errors => errors.error);
        }
      })
  }

  return (
    <div className="LogInForm has-text-weight-bold has-text-danger is-size-4 card">
      <form onSubmit={handleSubmit}>
        <h1></h1>
        <label
          htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>
          <label
            htmlFor="password"
          >
            Password:
          </label>
          <input
            type="password"
            // name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button type="submit" >Log In</button>
        <p>or</p>
        <p><Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}

export default LogIn;