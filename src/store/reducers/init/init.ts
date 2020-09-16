import { createReducer } from '@reduxjs/toolkit'
import { increment, decrement } from '../../actions/init/actions'

export const init = createReducer(0, {
    [increment.type]: (state) => state + 1,
    [decrement.type]: (state) => state - 1
})

export type Init = typeof init
