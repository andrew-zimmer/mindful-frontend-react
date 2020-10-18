import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MoodFormStepper from './MoodFormStepper'

export default class MoodDairyForm extends Component {
    state = {
        moodSelect: ''
    }

    handleCardFlips = (mood) => {
        this.setState({ moodSelect: mood })

    }

    render() {
        return (
            <div>
                <Container  >
                    <Paper elevation={24} style={{ height: '100%', marginTop: '3rem', padding: '3rem' }}>
                        <Typography variant='h1' align='center' style={{ paddingTop: '0rem' }}>Mood Diary</Typography>
                        <MoodFormStepper moodSelect={this.state.moodSelect} handleCardFlips={this.handleCardFlips} />

                    </Paper>
                </Container>
            </div>
        )
    }
}
