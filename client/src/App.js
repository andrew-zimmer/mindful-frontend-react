import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          'Are you lost?'
        </Route>
      </Switch>
    </div>
  );
}

export default App;
