import './App.css';
import SelectParty from '../SelectParty/SelectParty';
import MakeParty from '../MakeParty/MakeParty';
import PartyMaker from '../PartyMaker/PartyMaker';
import Login from '../Login/Login';
import { Route, Switch } from 'react-router-dom';
import Register from '../Register/Register';
import { useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
    <ProtectedRoute loggedIn={isLoggedIn} component={SelectParty} path="/search" />
    {/* <Switch>
      <ProtectedRoute loggedIn={isLoggedIn} component={SelectParty} path="/search" />
      <ProtectedRoute loggedIn={isLoggedIn} component={PartyMaker} path="/make" />
      <Route path="/sign-up">
        <Register />
      </Route>
      <Route path="/sign-in">
        <Login />
      </Route>
    </Switch> */}
    </>
  );
}

export default App;
