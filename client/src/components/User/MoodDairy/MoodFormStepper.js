import React from 'react';

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import { createMood } from '../../../actions/mood'

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import MoodsOptions from './MoodsOptions'
import MoodDiaryEntry from './MoodDiaryEntry'
import MoodDiaryReflection from './MoodDiaryReflection'
import MoodResources from './MoodResources'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Select your mood', 'Create a diary entry', 'Helpful resources',];
}



function HorizontalLinearStepper({ moods, moodSelect, handleCardFlips, handleMoodEntry, moodEntry, moodTitle, createNewMood, handleMoodTitle }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const steps = getSteps();

    const history = useHistory()


    function getStepContent(step) {
        switch (step) {
            case 0:
                return `I feel... ${moodSelect}`;
            case 1:
                return "Lets write about it";
            case 2:
                return 'Some Helpful Resources';
            default:
                return 'Unknown step';
        }
    }

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        if (!!moodSelect) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        if (activeStep === 2) {
            //submit mood to db
            createNewMood()
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };



    const handleReset = () => {
        setActiveStep(0);
        handleMoodEntry({ target: { value: '' } })
        handleMoodTitle({ target: { value: '' } })
        handleCardFlips('')

    };



    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};

                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
            </Grid>

            {activeStep === 0 && moods.map(mood => <Grid key={mood.mood} item xs={6} md={3}><MoodsOptions moodSelect={moodSelect} handleCardFlips={handleCardFlips} mood={mood} /></Grid>)}
            {activeStep === 1 && <MoodDiaryEntry mood={moodSelect} moodTitle={moodTitle} handleMoodTitle={handleMoodTitle} moodEntry={moodEntry} handleMoodEntry={handleMoodEntry} />}
            {activeStep === 2 && <MoodResources mood={moodSelect} />}
            <Grid item xs={12}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                        <Button onClick={() => history.push('/users/home')}>
                            Home
                        </Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Back
                                </Button>


                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                                <Button variant='contained' onClick={() => history.push('/users/home')} style={{ float: 'right' }}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        moods: state.moods.moods
    }
}

export default connect(mapStateToProps, { createMood })(HorizontalLinearStepper)
