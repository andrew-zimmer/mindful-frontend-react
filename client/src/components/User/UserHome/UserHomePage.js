import React, { Component } from 'react'

import EmergancyModal from './EmergancyModal'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export default class UserHomePage extends Component {
    state = {
        ele1: 5,
        ele2: 5,
        ele3: 5,
    }

    handleTouchStart = (e) => {
        this.setState({ [e.target.id]: 24 })
    }

    handleMouseOut = (e) => {
        this.setState({ [e.target.id]: 5 })
    }

    render() {
        return (
            <Container  >
                <Paper elevation={24} style={{ height: '100%', marginTop: '6rem', paddingTop: '3rem', paddingLeft: '5em', paddingRight: '5em', paddingBottom: '2em' }}>
                    <Typography variant='h2' align='center' >Weclome User</Typography>

                    <Grid container spacing={2} style={{ marginTop: '3rem' }}>
                        <Grid item xs={4}>
                            <Paper elevation={this.state.ele1} style={{ height: 150 }} onMouseEnter={this.handleTouchStart} onMouseOut={this.handleMouseOut}>
                                <Button id='ele1' style={{ height: '100%', width: '100%' }} > Mood Diary</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={this.state.ele2} style={{ height: 150 }} onMouseEnter={this.handleTouchStart} onMouseOut={this.handleMouseOut}>
                                <Button id='ele2' style={{ height: '100%', width: '100%' }}>Mood Data</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={this.state.ele3} style={{ height: 150 }} onMouseEnter={this.handleTouchStart} onMouseOut={this.handleMouseOut}>
                                <Button id='ele3' style={{ height: '100%', width: '100%' }}>Mindfulness Protocol</Button>
                            </Paper>
                        </Grid>
                    </Grid>
                    <div style={{ marginTop: '4rem' }}>
                        <EmergancyModal />
                    </div>
                </Paper>

            </Container>
        )
    }
}
