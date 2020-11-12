import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'

import MoodReflectionQuesDrawer from './MoodReflectionQueDrawer'


export default class MoodDiaryEntry extends Component {
    render() {
        return (
            <Container>
                <MoodReflectionQuesDrawer />
                <TextField fullWidth variant='outlined' label='Title' style={{ marginBottom: 5 }} value={this.props.moodTitle} onChange={this.props.handleMoodTitle} />
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={6}
                    placeholder={`What has you feeling ${this.props.mood}?`}
                    variant="outlined"
                    style={{ width: "100%" }}
                    value={this.props.moodEntry}
                    onChange={this.props.handleMoodEntry}
                />
            </Container>
        )
    }
}
