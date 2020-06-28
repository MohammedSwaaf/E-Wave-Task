import React from 'react';
import './App.css';
import Home from './home/home';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
