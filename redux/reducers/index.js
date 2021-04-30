import { combineReducers } from 'redux'
import { platformTypeReducer } from './platformType'
import { servicesTabSelectedReducer } from './userServicesTab'
import { userLoginReducer } from './userLogin'
import { globalTabReducer } from './globalTab'
import { userMessagesTabReducer } from './userMessagesTab'
import { userServiceSearchTabReducer } from './userServiceSearchTab'
import { CustomerServiceDashboardTabReducer } from './customerServiceDashboard'
import { customerActiveToolReducer } from './customerActiveTool'
import { ordersToolReducer } from './ordersTool'
import { 
    expensesToolReducer,
    expensesToolFormReducer 
} from './expensesTool'
import {
    customersToolReducer,
    customersToolPaymentFormReducer,
    customersToolCreditFormReducer
} from './customersTool'
import { 
    providersToolReducer,
    providersToolPaymentFormReducer,
    providersToolCreditFormReducer
} from './providersTool'
import { ticketsToolReducer } from './ticketsTool'
import { customerProfileFormsReducer } from './customerProfileForms'
import { customerReservationsFormsReducer } from './customerReservationsForms'
import { customerOrderToolFormReducer } from './customerOrdersTool'
import { customerTicketsToolFormReducer } from './customerTicketsTool'
const rootReducer = combineReducers({
    platformType: platformTypeReducer,
    userLogin: userLoginReducer,
    userServicesTab: servicesTabSelectedReducer,
    globalTab: globalTabReducer,
    userMessagesTab: userMessagesTabReducer,
    userServiceSearchTab: userServiceSearchTabReducer,
    customerDashboardTab: CustomerServiceDashboardTabReducer,
    customerActiveTool: customerActiveToolReducer,
    ordersTool: ordersToolReducer,
    expensesTool: expensesToolReducer,
    expensesToolForm:expensesToolFormReducer,
    customersTool: customersToolReducer,
    customersToolPaymentForm:customersToolPaymentFormReducer,
    customersToolCreditForm:customersToolCreditFormReducer,
    providersTool: providersToolReducer,
    providersToolPaymentForm:providersToolPaymentFormReducer,
    providersToolCreditForm:providersToolCreditFormReducer,
    ticketsTool: ticketsToolReducer,
    customerProfileForms: customerProfileFormsReducer,
    customerReservationsForms: customerReservationsFormsReducer,
    customerOrderToolForm: customerOrderToolFormReducer,
    customerTicketsToolForm: customerTicketsToolFormReducer
})

export default rootReducer