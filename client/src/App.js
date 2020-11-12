import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { checkSessionForToken } from './actions/user'

import Home from './containers/Home'
import User from './containers/User'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)


class App extends React.Component {
  loggedIn = this.props.loggedIn

  UNSAFE_componentWillMount() {
    this.props.checkSessionForToken()
  }


  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/">
              {this.loggedIn ? <Redirect to='/users/home' /> : <Home />}
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
}

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  }
}

export default connect(mapStateToProps, { checkSessionForToken })(App)
