import React from 'react';

import { Link } from 'react-router-dom'

import LoadingBackDrop from '../../LoadingBackDrop'

import { connect } from 'react-redux'
import { signUp } from '../../../actions/user'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to='/'>
                Mindful
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function SignUp({ signUp, loading }) {
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passwordConfirmation, setPasswordConfirmation] = React.useState('')

    const handleChange = (e) => {
        e.target.id === 'username' && setUsername(e.target.value)
        e.target.id === 'email' && setEmail(e.target.value)
        e.target.id === 'password' && setPassword(e.target.value)
        e.target.id === 'passwordConfirmation' && setPasswordConfirmation(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            username,
            email,
            password,
            passwordConfirmation
        }
        signUp(userData)
    }

    const classes = useStyles();

    return (
        <Container>
            <Paper elevation={5} style={{ paddingBottom: '2rem' }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
        </Typography>
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12}>
                                    <TextField
                                        autoComplete="username"
                                        name="username"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="username"
                                        label="User Name"
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                    />
                                </Grid><Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="passwordConfirmation"
                                        label="Password Confirmation"
                                        type="password"
                                        id="passwordConfirmation"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
          </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Link to="/users/login" variant="body2">
                                        Already have an account? Sign in
              </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </Container>
            </Paper>
            <LoadingBackDrop loading={loading} />
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.users.loading
    }
}

export default connect(mapStateToProps, { signUp })(SignUp)
