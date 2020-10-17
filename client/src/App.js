import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './containers/Home'
import User from './containers/User'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)


function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
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
      </MuiThemeProvider>
    </div>
  );
}

export default App;
