import { combineReducers } from 'redux'
import { uiReducer } from './uiReducer'

export const rootReducer = combineReducers({
    ui: uiReducer,
    //TODO: add auth reducer
    //TODO: add calendar reducer
})