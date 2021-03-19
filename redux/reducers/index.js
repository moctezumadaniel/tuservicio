import {combineReducers} from 'redux'
import {platformTypeReducer} from './platformType'
import {servicesTabSelectedReducer} from './userServicesTab'
import {userLoginReducer} from './userLogin'
import {globalTabReducer} from './globalTab'
import {userMessagesTabReducer} from './userMessagesTab'
import {userServiceSearchTabReducer} from './userServiceSearchTab'
import {CustomerServiceDashboardTabReducer} from './customerServiceDashboard'
import {customerActiveToolReducer} from './customerActiveTool'
import {ordersToolReducer} from './ordersTool'
const rootReducer = combineReducers({
    platformType:platformTypeReducer,
    userLogin: userLoginReducer,
    userServicesTab:servicesTabSelectedReducer,
    globalTab:globalTabReducer,
    userMessagesTab:userMessagesTabReducer,
    userServiceSearchTab: userServiceSearchTabReducer,
    customerDashboardTab:CustomerServiceDashboardTabReducer,
    customerActiveTool:customerActiveToolReducer,
    ordersTool:ordersToolReducer,
})

export default rootReducer