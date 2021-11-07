// import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';
import Members from './Members'
import NewMemberForm from './NewMemberForm'
import LogOut from './LogOut';

 function AuthenticatedApp({ currentUser, setCurrentUser }) {


        return (
            <div className="App">
                <Router>
                <nav>
                {/* <span> Logged in as {currentUser.name} <button onClick={handleLogout}>Logout</button></span> */}
                </nav>
                
                 
                <Switch>
                    <Route exact path="/members/new">
                    <NewMemberForm
                    currentUser ={currentUser}
                    setCurrentUser ={setCurrentUser}/>
                    </Route>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/members">
                        <Members
                        currentUser ={currentUser}
                        setCurrentUser ={setCurrentUser}/>
                    </Route>
                </Switch>
                </Router>
            </div>
        );
    }
    export default AuthenticatedApp;