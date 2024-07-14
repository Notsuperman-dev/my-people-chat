import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import MainMenu from './pages/MainMenu';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/mainmenu" component={MainMenu} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
