import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import User from './containers/User'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/users'>
          <User />
        </Route>
        <Route>
          'Are you lost?'
        </Route>
      </Switch>
    </div>
  );
}

export default App;
