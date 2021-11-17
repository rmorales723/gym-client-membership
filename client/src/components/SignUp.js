import React, { useState } from 'react'
import { useHistory, Link, withRouter } from 'react-router-dom'

function SignUp(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState("");

  const errorRender = () => {
    return errors.map(err => {
      return <div className="alert alert-danger" role="alert">{err}</div>
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        number: number,
        address: address,
      }),
    })
      .then(res => {
        if (res.ok) {
          res.json().then(gym => {
            props.setCurrentUser(gym)
            props.history.push('/members')
          })
        } else {
          res.json().then(errors => {
            setErrors(errors.errors)
          })
        }
      })
  }

  return (
    <div className="body-app">
      <div className="form-outsider">
        <div className="form-container"></div>
        <form className="new-member-form has-text-weight-bold has-text-black-bis list-group" onSubmit={handleOnSubmit}>
        {errors && errorRender()}
      
          <h1>Sign Up</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />

          <p><button type="submit">Submit</button></p>
          <p> or </p>
          <p><Link to="/">LogIn</Link></p>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SignUp);