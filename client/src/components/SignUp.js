import React, { useState } from 'react'
import { useHistory, Link, withRouter } from 'react-router-dom'

function SignUp(props) {
    // const history = useHistory()
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
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
      <form className="new-member-form has-text-weight-bold has-text-black-bis list-group" onSubmit={handleSubmit}>
          
          <h1>Sign Up</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        
          <p><button type="submit">Submit</button></p>
          <p> or </p>
          <p><Link to="/">LogIn</Link></p>
      </form>
      
    );
  } 

  export default withRouter(SignUp);