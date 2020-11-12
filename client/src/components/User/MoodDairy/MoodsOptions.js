import React, { Component } from 'react'

import { connect } from 'react-redux'

import ReactCardFlip from 'react-card-flip';

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'


class MoodsOptions extends Component {
    state = {
        isFlipped: false

    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isFlipped) {
            this.props.moodSelect === this.props.mood.mood && this.setState({ isFlipped: true })
        } else {
            this.props.moodSelect !== this.props.mood.mood && this.setState({ isFlipped: false })
        }
    }

    componentDidMount() {
        if (this.props.moodSelect === this.props.mood.mood) {
            this.setState({ isFlipped: true })
        }
    }

    handleMouseOver = (e) => {

        this.props.handleCardFlips(this.props.mood.mood)
    }

    handleMouseOut = (e) => {
        this.props.handleCardFlips('')
    }

    flipped = () => {
        if (!this.state.isFlipped) {
            this.props.moodSelect === this.props.mood.mood && this.setState({ isFlipped: true })
        } else {
            this.props.moodSelect !== this.props.mood.mood && this.setState({ isFlipped: false })
        }

    }




    render() {
        return (

            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical" >

                <Paper onClick={this.handleMouseOver} style={{ width: '100%', minWidth: '6rem', minHeight: "6rem" }}>

                    <Typography keys='front' align='center' variant='h4' gutterBottom className='flip-card-front'>
                        {this.props.mood.mood}
                    </Typography>
                    <Typography keys='back' variant='h3' align='center' className='flip-card-back' style={{ marginBottom: 5 }}>
                        <i className={this.props.mood.pic}></i>
                    </Typography>
                </Paper>
                <Paper elevation={12} onClick={this.handleMouseOut} style={{ width: '100%', minHeight: "6rem", backgroundColor: this.props.mood.backgroundColor }}>

                    <Typography keys='front' align='center' variant='h4' gutterBottom className='flip-card-front' style={{ color: 'white' }}>
                        {this.props.mood.mood}
                    </Typography>
                    <Typography keys='back' variant='h3' align='center' className='flip-card-back' style={{ color: 'white', marginBottom: 5 }}>
                        <i className={this.props.mood.pic}></i>
                    </Typography>
                </Paper>
            </ReactCardFlip>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        moods: state.moods.moods
    }

}

export default connect(mapStateToProps)(MoodsOptions)
