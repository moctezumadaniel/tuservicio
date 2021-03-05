import {combineReducers} from 'redux'

import userLoginReducer from './userLogin'

const rootReducer = combineReducers({
    userLogin: userLoginReducer
})

export default rootReducer