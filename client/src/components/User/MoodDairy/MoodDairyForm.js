import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import MoodFormStepper from './MoodFormStepper'

export default class MoodDairyForm extends Component {

    render() {
        return (
            <div>
                <Container  >
                    <Paper elevation={24} style={{ height: '100%', marginTop: '6rem', padding: '5rem' }}>
                        <Typography variant='h1' align='center' style={{ paddingTop: '0.5em' }}>Mood Diary</Typography>
                        <MoodFormStepper />

                    </Paper>
                </Container>
            </div>
        )
    }
}
