import {combineReducers} from 'redux'
import {servicesTabSelectedReducer} from './userServicesTab'
import {userLoginReducer} from './userLogin'
import {globalTabReducer} from './globalTab'
import {userMessagesTabReducer} from './userMessagesTab'
const rootReducer = combineReducers({
    userLogin: userLoginReducer,
    userServicesTab:servicesTabSelectedReducer,
    globalTab:globalTabReducer,
    userMessagesTab:userMessagesTabReducer,
})

export default rootReducer