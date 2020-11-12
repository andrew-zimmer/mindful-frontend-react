import React, { Component } from 'react'

import { connect } from 'react-redux'

import MoodData from './MoodData'
import Drawer from '../UserHome/Drawer'
class MoodDataDisplay extends Component {
    state = {
        userMoods: this.props.userMoods,
        moods: this.props.moods,
        uniqMoods: [...new Set([...this.props.userMoods.map(mood => mood.mood)])]
    }

    changeMood = (arr) => {
        this.setState({ uniqMoods: arr })
    }

    render() {
        return (
            <div>
                <Drawer content={<MoodData userMoods={this.state.userMoods} moods={this.state.moods} uniqMoods={this.state.uniqMoods} />} />
                {/* <MoodFilter userMoods={this.props.userMoods} setState={this.changeMood} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userMoods: state.users.userMoods,
        username: state.users.username,
        moods: state.moods.moods
    }
}

export default connect(mapStateToProps)(MoodDataDisplay)
