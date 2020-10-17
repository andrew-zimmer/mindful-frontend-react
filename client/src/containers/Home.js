import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import HomePage from '../components/Home/HomePage'

class Home extends Component {
    componentWillMount() {
        document.body.style = 'background: skyblue'
    }

    componentWillUnmount() {
        document.body.style = 'background: white'
    }
    render() {
        return (
            <div>
                <HomePage />
            </div>
        )
    }
}

export default withRouter(Home)
