import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
        minHeight: '48px',
        marginRight: '10px',
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function Entered() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(state => state.enteredWords);
    return (
        <Paper className={classes.root}>
            {data.map(word => {

                return (
                    <Chip
                        key={word.id}
                        label={word.text}
                        onDelete={(e) => { dispatch({ type: 'ADD_TO_DICTIONARY', payload: word }) }}
                        className={classes.chip}
                    />
                );
            })}
        </Paper>
    );

}