import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Nav from './components/Nav';
import PlayersPage from './components/PlayersPage';
import TeamsPage from './components/TeamsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/players">
            <PlayersPage />
          </Route>
          <Route path="/teams">
            <TeamsPage />
          </Route>
          <Route path="*">
            <Redirect to="/players" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
