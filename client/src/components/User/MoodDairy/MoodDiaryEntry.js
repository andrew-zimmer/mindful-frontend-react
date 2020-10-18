import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container'


export default class MoodDiaryEntry extends Component {
    render() {
        return (
            <Container>
                <TextField
                    id="filled-multiline-static"
                    multiline
                    rows={4}
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
