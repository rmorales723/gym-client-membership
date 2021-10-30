import React, { Component } from "react";

function Logout({ user,onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
          {user ? (
        <div>
        <p>Welcome, {user.username}!</p>
        <button onClick={handleLogout}>Logout</button>
        </div>
        ) : (
            <Link to="/login">Click Here to Login</Link>
        )}
      </header>
    );
  } 

  export default Logout;