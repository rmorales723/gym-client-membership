import React, { Component } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogOut({ user,onLogOut }) {
    function handleLogout() {
      fetch("/LogOut", {
        method: "DELETE",
      }).then(() => onLogOut());
    }
  
    return (
      <header>
          {user ? (
        <div>
        <p>Welcome, {user.username}!</p>
        <button onClick={handleLogOut}>Logout</button>
        </div>
        ) : (
            <Link to="/login">Click Here to Login</Link>
        )}
      </header>
    );
  } 

  export default LogOut;