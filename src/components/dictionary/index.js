import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ReplyIcon from '@material-ui/icons/Reply';

import { upadteWord } from '../../api';

import { UPDATE_WORD_SUCCESS } from '../../reducers/constants';

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        marginTop: '10px',
        maxWidth: 500,
        minHeight: 500,
        maxHeight: 600,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
        fontSize: 15,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
}));

export default function Dictionary() {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    const data = useSelector(state => state.dictionary.dictionary);

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
            <List className={classes.roots}>
                {data.map(value => {
                    const labelId = `checkbox-list-label-${value._id}`;

                    return (
                    <ListItem
                        key={value._id}
                        role={undefined}
                        dense
                        button
                        onClick={() => {
                            updateWordAction({ ...value, type: 'entered' });
                        }}
                    >
                        <ListItemIcon>
                            <IconButton>
                                <ReplyIcon style={{fontSize: 'large'}}/>
                            </IconButton>
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value.text} />
                    </ListItem>
                    );
                })}
            </List>
        </Paper>
    );

}