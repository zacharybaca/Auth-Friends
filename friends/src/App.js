import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

//Imported Components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
        <Switch>
            <PrivateRoute path="/protected" component={FriendsList} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
