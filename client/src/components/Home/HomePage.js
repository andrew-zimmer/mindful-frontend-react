import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { checkSessionForToken } from '../../actions/user'

import Slider from './Slider'

import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';

class HomePage extends Component {

    UNSAFE_componentWillMount() {
        this.props.checkSessionForToken()
    }

    handleClickSignIn = () => {
        this.props.history.push('/users/login')
    }

    handleClickSignUp = () => {
        this.props.history.push('/users/signup')
    }
    render() {
        return (
            <Container  >
                <Paper elevation={24} style={{ height: '100%', marginTop: '6rem', padding: '5rem' }}>
                    <Typography variant='h1' align='center' style={{ paddingTop: '0.5em' }}>Mindful</Typography>
                    <Typography variant='overline' display='block' align='center' style={{ marginTop: '1em', marginBottom: '5em' }}>  </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={1} sm={2} md={3} lg={4} xl={5}></Grid>
                        <Grid item xs={5} sm={4} md={3} lg={2} xl={1} align='center'>
                            <Button variant='outlined' size='large' onClick={this.handleClickSignIn}>Sign In</Button>
                        </Grid>
                        <Grid item xs={5} sm={4} md={3} lg={2} xl={1} align='center' style={{ borderLeft: 'solid' }}>
                            <Button variant='outlined' size='large' onClick={this.handleClickSignUp}>Sign Up</Button>
                        </Grid>
                        <Grid item xs={1} sm={2} md={3} lg={4} xl={5}></Grid>
                    </Grid>
                </Paper>
                <div style={{ marginTop: '1rem' }}>
                    <Button>
                        <GitHubIcon />
                    </Button>
                    <Button>
                        <YouTubeIcon />
                    </Button>
                </div>
            </Container>
        )
    }
}

export default connect(null, { checkSessionForToken })(withRouter(HomePage))
