import React, { Component } from 'react'

import EmergancyModal from './EmergancyModal'

import { connect } from 'react-redux'
import { signOut, checkSessionForToken } from '../../../actions/user'


import { withRouter } from 'react-router-dom'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

class UserHomePage extends Component {
    state = {
        ele1: 5,
        ele2: 5,
        ele3: 5,
    }

    UNSAFE_componentWillMount() {
        this.props.checkSessionForToken()
    }

    handleTouchStart = (e) => {
        this.setState({ [e.target.id]: 24 })
    }

    handleMouseOut = (e) => {
        this.setState({ [e.target.id]: 5 })
    }

    render() {
        return (
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={4} />
                    <Grid item xs={4} align='center'>
                        <Typography variant='h3' style={{ animation: 'marquee 15s linear infinite' }}>Mindful</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Button style={{ float: 'right' }} onClick={() => this.props.signOut(this.props.id)}>Signout</Button>
                    </Grid>
                </Grid>
                <Paper elevation={24} style={{ height: '100%', marginTop: '6rem', paddingTop: '3rem', paddingLeft: '5em', paddingRight: '5em', paddingBottom: '2em' }}>
                    <Typography variant='h2' align='center' >Weclome {this.props.username}</Typography>

                    <Grid container spacing={2} style={{ marginTop: '3rem' }}>
                        <Grid item xs={4}>
                            <Paper elevation={this.state.ele1} style={{ height: 150 }} onMouseEnter={this.handleTouchStart} onMouseOut={this.handleMouseOut} onClick={() => this.props.history.push('/users/mooddiary/new')}>
                                <Button id='ele1' style={{ height: '100%', width: '100%' }} > Mood Diary</Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={this.state.ele2} style={{ height: 150 }} onMouseEnter={this.handleTouchStart} onMouseOut={this.handleMouseOut} onClick={() => this.props.history.push('/users/mooddata')}>
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

const mapStateToProps = state => {
    return {
        id: state.users.id,
        username: state.users.username
    }
}

export default connect(mapStateToProps, { signOut, checkSessionForToken })(withRouter(UserHomePage))
