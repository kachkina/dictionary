import {
    GET_ENTERED_WORDS_SUCCESS,
    GET_DICTIONARY_WORDS_SUCCESS,
    ADD_WORD,
    UPDATE_WORD_SUCCESS
} from './constants'
const initialState = {
    enteredWords: [],
    dictionary: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_WORD:
            return {
                ...state,
                enteredWords: [...state.enteredWords, action.payload],
            };
        case UPDATE_WORD_SUCCESS: {
            return {
                ...state,
                enteredWords: action.payload.type === 'entered' ? [...state.enteredWords, action.payload] : state.enteredWords.filter((word) => word._id !== action.payload._id),
                dictionary: action.payload.type === 'dictionary' ? [...state.dictionary, action.payload] : state.dictionary.filter((word) => word._id !== action.payload._id)
            }
        }
        case GET_ENTERED_WORDS_SUCCESS: {
            return {
                ...state,
                enteredWords: action.payload,
            }
        }
        case GET_DICTIONARY_WORDS_SUCCESS: {
            return {
                ...state,
                dictionary: action.payload,
            }
        }
        default:
            return state;
    }
};