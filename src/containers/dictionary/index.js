import React from 'react';
import Container from "@material-ui/core/Container";

import Input from '../../components/input/';
import Words from '../../components/entered-words/';
import Dic from '../../components/dictionary/';
import useDictionary from '../../logic-hooks/useDictionary';
import {makeStyles} from "@material-ui/core";

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