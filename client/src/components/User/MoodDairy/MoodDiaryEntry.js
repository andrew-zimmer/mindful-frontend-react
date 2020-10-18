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
                    placeholder="What has you feeling like this... ?"
                    variant="outlined"
                    style={{ width: "100%" }}
                />
            </Container>
        )
    }
}
