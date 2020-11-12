import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createMood } from '../../../actions/mood'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MoodFormStepper from './MoodFormStepper'
import Drawer from '../UserHome/Drawer'

class MoodDairyForm extends Component {
    state = {
        moodSelect: '',
        moodEntry: '',
        moodTitle: ''
    }

    handleCardFlips = (mood) => {
        this.setState({ moodSelect: mood })

    }

    handleMoodEntry = (e) => {
        this.setState({ moodEntry: e.target.value })
    }

    handleMoodTitle = (e) => {
        this.setState({ moodTitle: e.target.value })
    }

    createNewMood = () => {
        const userData = {
            mood: this.state.moodSelect,
            comment: this.state.moodEntry,
            id: this.props.id,
            title: this.state.moodTitle
        }
        console.log(userData)
        this.props.createMood(userData)
    }

    renderContent = () => {
        return (
            <Container  >
                <Paper elevation={24} style={{ height: '100%', marginTop: '3rem', padding: '3rem' }}>
                    <Typography variant='h1' align='center' style={{ paddingTop: '0rem' }}>Mood Diary</Typography>
                    <MoodFormStepper id={this.props.id} moodSelect={this.state.moodSelect} createNewMood={this.createNewMood} moodTitle={this.state.moodTitle} handleMoodTitle={this.handleMoodTitle} moodEntry={this.state.moodEntry} handleMoodEntry={this.handleMoodEntry} handleCardFlips={this.handleCardFlips} />

                </Paper>
            </Container>
        )
    }

    render() {
        return (
            <div>
                <Drawer content={this.renderContent()} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.users.id
    }
}

export default connect(mapStateToProps, { createMood })(MoodDairyForm)
