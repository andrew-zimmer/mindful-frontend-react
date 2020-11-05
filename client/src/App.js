import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

import Home from './containers/Home'
import User from './containers/User'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)


function App({ loggedIn }) {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to='/users/home' /> : <Home />}
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

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  }
}

export default connect(mapStateToProps)(App)
