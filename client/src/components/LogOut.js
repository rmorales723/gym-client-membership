import React, { Component } from "react";
import { Redirect, useHistory, Link } from 'react-router-dom'

function LogOut({ gym, onLogOut }) {
  function handleLogOut() {
    fetch("/LogOut", {
      method: "DELETE",
    }).then(() => onLogOut());
  }

  return (
    <header>
      {gym ? (
        <div>
          <p>Welcome, {gym.name}!</p>
        </div>
      ) : (
        <Link to="/signup">Click Here to LogOut</Link>
      )}
    </header>
  );
}

export default LogOut;