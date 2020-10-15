import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom'

import SignInForm from '../components/User/Signin/SignInForm'
import SignUpForm from '../components/User/SignUp/SignUpForm'
import UserHomePage from '../components/User/UserHome/UserHomePage'

export default class User extends Component {
    render() {
        return (
            <Switch>
                <div>
                    <Route exact path='/users/login'>
                        <SignInForm />
                    </Route>
                    <Route exact path='/users/signup'>
                        <SignUpForm />
                    </Route>
                    <Route exact path='/users/home'>
                        <UserHomePage />
                    </Route>
                </div>
            </Switch>
        )
    }
}
