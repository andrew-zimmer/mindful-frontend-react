import React, { Component } from 'react'

import { connect } from 'react-redux'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'

class MoodResources extends Component {
    render() {
        console.log(this.props.moods.filter(mood => mood.mood === this.props.mood)[0])
        return (
            <Container style={{ padding: 20 }}>
                <Grid container align='center'>
                    <Grid item xs={12}>
                        <Typography variant='h3'>
                            Helpful Resources
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            Here are some resources that could help.
                        </Typography>
                        <Link href={this.props.moods.filter(mood => mood.mood === this.props.mood)[0].resource} target='_blank'>
                            {this.props.moods.filter(mood => mood.mood === this.props.mood)[0].resource}
                        </Link>

                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        moods: state.moods.moods
    }
}

export default connect(mapStateToProps)(MoodResources)
