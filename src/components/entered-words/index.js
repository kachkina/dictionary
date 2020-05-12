import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';

import { UPDATE_WORD_SUCCESS } from '../../reducers/constants'

import { upadteWord } from '../../api'

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
    const data = useSelector(state => state.dictionary.enteredWords);
    const updateWordAction = async (word) => {
        const updatedWord = await upadteWord(word);
        if (!updatedWord.error) {
            dispatch({
                type: UPDATE_WORD_SUCCESS,
                payload: updatedWord.data,
            });
        }
    }
    return (
        <Paper className={classes.root}>
            {data.map(word => {

                return (
                    <Chip
                        key={word._id}
                        label={word.text}
                        onDelete={(e) => { updateWordAction({ ...word, type: 'dictionary' }) }}
                        className={classes.chip}
                    />
                );
            })}
        </Paper>
    );

}