import './App.css';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <div className="App">
      {/* <User user={user} onLogout={handleLogout} /> */}
         <Switch>
          <Route exact path="/members/:id">
          {/* <Member /> */}
          </Route>
          <Route exact path="/login">
          {/* <Login Login={handleLogin} /> */}
        </Route>
        <Route exact path="/">
          {/* <Members/> */}
        </Route>
        </Switch>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
