import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import MoodDiaryReflection from './MoodDiaryReflection'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    button: {
        float: 'right',
        marginBottom: 10
    },

});

export default function HelpfulQuestionDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>

            <React.Fragment>
                <Button variant='outlined' color='primary' className={classes.button} onClick={toggleDrawer('top', !state['top'])}>Helpful Questions</Button>
                <Drawer
                    anchor='top'
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                    onOpen={toggleDrawer('top', true)}
                    variant='persistent'
                    onClick={toggleDrawer('top', false)}

                >
                    <MoodDiaryReflection />
                </Drawer>
            </React.Fragment>

        </div>
    );
}
