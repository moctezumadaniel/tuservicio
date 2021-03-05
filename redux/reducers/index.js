import {combineReducers} from 'redux'
import {servicesTabSelectedReducer} from './userServicesTab'
import {userLoginReducer} from './userLogin'

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userServicesTab:servicesTabSelectedReducer,
})

export default rootReducer