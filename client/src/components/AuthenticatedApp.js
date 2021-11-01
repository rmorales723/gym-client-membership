// import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

 function AuthenticatedApp({ setCurrentUser }) {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [login, setLogin] = useState('')
//     const [errors, setErrors] = useState([])

//   const onSubmit = (e) => {
//         e.preventDefault()
//         const gym = {
//             username,
//             password
//         }
        // fetch('/gym', {
        //     method: "POST",
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => {
        //         if (res.ok) {
        //             res.json().then((user) => setCurrentUser(user))
        //         } else {
        //             res.json().then(e => setErrors())

        //         }
        //     })
        // }
        return (
            <div className="App">
                <nav>
                    {/* <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span> */}
                </nav>
                <h1>Authorized</h1>
                <Switch>
                    <Route path="/">
                        {/* <GroupsContainer /> */}
                    </Route>
                    <Route path="/">
                        {/* <EventsContainer /> */}
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
    export default AuthenticatedApp;