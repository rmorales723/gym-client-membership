// import './App.css';
import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom';
import LandingPage from './LandingPage';
import Members from './Members'
import NewMemberForm from './NewMemberForm'
import LogOut from './LogOut';
import EditMember from './EditMember';
import Home from './Home'

function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()
    const handleLogOut = () => {
        fetch("/logout", {
            method: "DELETE"
        })
            .then(() => {
                setCurrentUser(null)
                history.push("/")
            })

    }



    return (

        <div className="App">

            <p>Logged in as {currentUser.name}</p>
            <nav><button onClick={handleLogOut}>Logout</button></nav>

            <Switch>
                <Route exact path="/" component={Home}>

                </Route>

                <Route exact path="/members/new">
                    <NewMemberForm
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser} />
                </Route>


                <Route exact path="/members" component={Members}>
                    <Members
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser} />
                </Route>

                <Route exact path="/members/:id/edit" component={EditMember}>
                    <EditMember
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>

        </div>
    );
}
export default AuthenticatedApp;