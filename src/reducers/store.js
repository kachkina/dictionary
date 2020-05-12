import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import dictionary from "./dictionary";

export default function configureStore(preloadedState) {
    const store = createStore(
        combineReducers({
            dictionary,
        }),
        applyMiddleware(logger)
    );
    return store;
};