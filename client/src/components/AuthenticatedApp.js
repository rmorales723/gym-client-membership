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
                <h1>Authorized: {currentUser.name}</h1>
                 
                <Switch>
                    <Route exact path="/members/new" component={NewMemberForm}/>
                    <Route exact path="/members">
                        <Members
                        currentUser ={currentUser}
                        setCurrentUser ={setCurrentUser}/>
                    </Route>
                </Switch>
            </div>
        );
    }
    export default AuthenticatedApp;