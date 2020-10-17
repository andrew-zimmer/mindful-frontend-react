import React, { Component } from 'react'

import { connect } from 'react-redux'

import ReactCardFlip from 'react-card-flip';

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



class MoodsOptions extends Component {
    state = {
        isFlipped: false
    }

    handleMouseOver = (e) => {
        this.setState({
            isFlipped: true
        })
    }

    handleMouseOut = (e) => {
        this.setState({
            isFlipped: false
        })
    }


    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

                <Paper onClick={this.handleMouseOver} style={{ width: '100%', height: 100 }}>

                    <Typography keys='front' variant='h3' className='flip-card-front'>
                        {this.props.mood.mood}
                    </Typography>
                </Paper>
                <Paper onClick={this.handleMouseOut} style={{ width: '100%', height: 100 }}>

                    <Typography keys='back' variant='h3' align='center' className='flip-card-back'>
                        <i className={this.props.mood.pic}></i>
                    </Typography>
                </Paper>
            </ReactCardFlip>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        moods: state.moods
    }

}

export default connect(mapStateToProps)(MoodsOptions)
