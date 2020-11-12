import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default class MoodDiaryReflection extends Component {
    render() {
        return (
            <Container style={{ padding: 20 }}>
                <Grid container align='center'>
                    <Grid item xs={12}>
                        <Typography variant='h3'>
                            Guiding Questions
                    </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What is the situation?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What am I thinking or imagining?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What makes me think the thought is true?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What makes me think the thought is not true or not completely true?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What's another way to look at this?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What's the worst that could happen? What could I do then?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What's the best that could happen?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What will probably happen?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What could happen if I changed my thinking?
                </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle1'>
                            What would I tell my friend (think of a specific person) if this happened to him or her?
                </Typography>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
