// import './App.css';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Members from './Members'
import NewMemberForm from './NewMemberForm'
 function AuthenticatedApp({ currentUser, setCurrentUser }) {


        return (
            <div className="App">
                <nav>
                    {/* <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span> */}
                </nav>
                <h1>Authorized</h1>
                <Members
                currentUser ={currentUser}
                setCurrentUser ={setCurrentUser}/>
                <Switch>
                <Route exact path="/members" component={Members}/>
                <Route exact path="/members/new" component={NewMemberForm}/>
                </Switch>
            </div>
        );
    }
    export default AuthenticatedApp;