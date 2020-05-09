const initialState = {
    enteredWords: [],
    dictionary: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_STORE': 
            const savedStore = JSON.parse(localStorage.getItem('store')) || state;
            return {
                ...savedStore,
            }
        case 'SAVE_STORE': 
            localStorage.setItem('store', JSON.stringify(state))
            return {
                ...state,
            }
        case 'ADD_WORD':
            return {
                ...state,
                enteredWords: [...state.enteredWords, { text: action.payload.text, id: action.payload.id === 'new' ? new Date().getTime() : action.payload.id }],
                dictionary: action.payload.id === 'new' ? state.dictionary : state.dictionary.filter((value) => value.id !== action.payload.id),
            };
        
        case 'ADD_TO_DICTIONARY':
            return {
                ...state,
                dictionary: [...state.dictionary, action.payload],
                enteredWords: state.enteredWords.filter((word) => word.id !== action.payload.id)
            }

        case 'ADD_TO_WORD':
            return {
                ...state,
                dictionary: state.dictionary.filter((value) => value.id !== action.payload.id),
                enteredWords: [...state.enteredWords, action.payload]
            }

        default:
            return state;
    }
};