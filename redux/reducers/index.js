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
import {expensesToolReducer} from './expensesTool'
import {customersToolReducer} from './customersTool'
import {providersToolReducer} from './providersTool'
import {ticketsToolReducer} from './ticketsTool'
import {customerProfileFormsReducer} from './customerProfileForms'
import {customerReservationsFormsReducer} from './customerReservationsForms'
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
    expensesTool:expensesToolReducer,
    customersTool:customersToolReducer,
    providersTool:providersToolReducer,
    ticketsTool:ticketsToolReducer,
    customerProfileForms:customerProfileFormsReducer,
    customerReservationsForms:customerReservationsFormsReducer,
})

export default rootReducer