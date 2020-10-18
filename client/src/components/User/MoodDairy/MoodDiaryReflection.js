import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

export default class MoodDiaryReflection extends Component {
    render() {
        return (
            <Container>
                <Typography variant='subtitle1'>
                    What is the situation?
                </Typography>
                <Typography variant='subtitle1'>
                    What am I thinking or imagining?
                </Typography>
                <Typography variant='subtitle1'>
                    What makes me think the thought is true?
                </Typography>
                <Typography variant='subtitle1'>
                    What makes me think the thought is not true or not completely true?
                </Typography>
                <Typography variant='subtitle1'>
                    What's another way to look at this?
                </Typography>
                <Typography variant='subtitle1'>
                    What's the worst that could happen? What could I do then?
                </Typography>
                <Typography variant='subtitle1'>
                    What's the best that could happen?
                </Typography>
                <Typography variant='subtitle1'>
                    What will probably happen?
                </Typography>
                <Typography variant='subtitle1'>
                    What could happen if I changed my thinking?
                </Typography>
                <Typography variant='subtitle1'>
                    What would I tell my friend (think of a specific person) if this happened to him or her?
                </Typography>
            </Container>
        )
    }
}
