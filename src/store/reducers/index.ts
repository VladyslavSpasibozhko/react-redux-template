import { combineReducers } from 'redux'
import { Init, init } from './init/init'

export type IStore = {
    init: Init
}

export const rootReducer = combineReducers({
    init
})
