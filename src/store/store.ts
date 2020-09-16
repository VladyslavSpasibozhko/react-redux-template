import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'
import {
    ALLOW_WINDOW_EXTENDS,
    ALLOW_REDUX_DEVTOOLS_EXTENSION
} from '../constants/env'

const saga = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
    devTools: ALLOW_REDUX_DEVTOOLS_EXTENSION && ALLOW_WINDOW_EXTENDS
})
