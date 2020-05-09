import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    container: {
       
    },
    textField: {
        marginRight: theme.spacing(1),
    },
    autocomplete: {
        flex: 'auto',
        paddingRight: 8,
        margin: 1,
    }
}));


export default function Input({ newWord, setNewWord }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const data = useSelector(state => state.dictionary);

    const [value, setValue] = useState(null);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(data)
    }, [data])

    return (
        <Autocomplete
            id="disable-portal"
            className={classes.autocomplete}
            disablePortal
            options={options}
            getOptionLabel={option => option.text}
            renderOption={(option, { inputValue }) => { 
                const matches = match(option.text, inputValue);
                const parts = parse(option.text, matches);
                return (
                  <div style={{fontSize: 15,}}>
                    {option.id === 'new' ? (
                        <IconButton>
                            <AddIcon style={{fontSize: 'large',}}/>
                        </IconButton>
                    ) : (
                        <IconButton>
                            <DoneIcon style={{fontSize: 'large',}}/>
                        </IconButton>
                    )}
                    {parts.map((part, index) => (
                      <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                        {part.text}
                      </span>
                    ))}
                  </div>
                );
            }}
            onChange={(e, val) => {
                if (val && val.text.trim()) {
                    dispatch({
                        type: 'ADD_WORD', payload: val,
                    });
                }
                setValue({text: ''})
            }}
            autoComplete
            includeInputInList	
            value={value}
            onInputChange={(e, val) => {
                const sameOption = options.find(item => item.text.toLowerCase() === val.trim());
                let newOptions = options.filter(item => item.id !== 'new');
                if (sameOption) {
                    setOptions(newOptions);
                } else {
                    if (val.trim()) {
                        newOptions = [...newOptions, {text: val, id: 'new'}];
                    }
                    setOptions(newOptions)
                }
            }}
            renderInput={params => (
                <TextField
                    {...params}
                    id="standard-basic"
                    className={classes.textField}
                    label="Enter a search expression"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                 />
            )}
        />
    );

}