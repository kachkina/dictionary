import React, { useEffect } from 'react';
import Container from "@material-ui/core/Container";
import { useDispatch } from 'react-redux';


import Input from '../../components/input/';
import Words from '../../components/entered-words/';
import Dic from '../../components/dictionary/';
import useDictionary from '../../logic-hooks/useDictionary';
import {makeStyles, Link} from "@material-ui/core";
import { GET_ENTERED_WORDS_SUCCESS, GET_DICTIONARY_WORDS_SUCCESS } from '../../reducers/constants';
import { getWords } from '../../api'

const useStyles = makeStyles(theme => ({

    container: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '1800px',
        marginLeft: 'auto',
    },
    dic:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    input: {
        flex:1,
        marginLeft: '80px',
    },
}));

export default function Dictionary(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchWords = async (type, actionType) => {
            const enteredWords = await getWords(type);
            if (!enteredWords.error) {
                dispatch({
                    type: actionType,
                    payload: enteredWords.data,
                })
            }
        }
        fetchWords('entered', GET_ENTERED_WORDS_SUCCESS);
        fetchWords('dictionary', GET_DICTIONARY_WORDS_SUCCESS);
    }, [])
    const { newWord, setNewWord } = useDictionary();
    return (
    <Container>
        <div
            className={classes.container}
            noValidate
            autoComplete="off"
        >
            <div
                className={classes.input}
            >
                <Words />
                <Input newWord={newWord} setNewWord={setNewWord} />
            </div>
            <div
                className={classes.dic}
            >
                <Dic />
            </div>
        </div>
    </Container>
    )
}