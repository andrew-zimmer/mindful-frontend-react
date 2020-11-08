import React, { Component } from 'react'

import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import SignInForm from '../components/User/Signin/SignInForm'
import SignUpForm from '../components/User/SignUp/SignUpForm'
import UserHomePage from '../components/User/UserHome/UserHomePage'
import MoodDairyForm from '../components/User/MoodDairy/MoodDairyForm'
import HomePage from '../components/Home/HomePage'
import MoodDataDisplay from '../components/User/MoodData/MoodDataDisplay'

class User extends Component {
    render() {
        return (
            <Switch>
                <div>
                    <Route exact path='/users/login'>
                        {this.props.loggedIn ? <UserHomePage /> : <SignInForm />}
                    </Route>
                    <Route exact path='/users/signup'>
                        {this.props.loggedIn ? <UserHomePage /> : <SignUpForm />}
                    </Route>
                    <Route exact path='/users/home'>
                        {this.props.loggedIn ? <UserHomePage /> : <HomePage />}
                    </Route>
                    <Route exact path='/users/mooddiary/new'>
                        {this.props.loggedIn ? <MoodDairyForm /> : <HomePage />}
                    </Route>
                    <Route exact path='/users/mooddata'>
                        {this.props.loggedIn ? <MoodDataDisplay /> : <HomePage />}
                    </Route>
                </div>
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.users.loggedIn
    }
}

export default connect(mapStateToProps)(User)
