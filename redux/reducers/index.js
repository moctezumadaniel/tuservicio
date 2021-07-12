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
import { customerCalculatorToolReducer } from '../../redux/reducers/customerCalculatorTool'   
import { userInformationReducer } from '../reducers/userInformation'
import { customerPublicInformationReducer } from './customerPublicInformation'
import { customerInformationReducer } from './customerInformation'
import { userPreferencesFormsReducer } from './userPreferencesForms'
import { customerEditingServiceReducer } from './customerEditingService'
import { customerEditingReservationReducer } from './customerEditingReservation'
import { customerSchedulePeriodReducer } from './customerSchedulePeriod'
import { customerEditingScheduleReducer } from './customerEditingSchedule'
import { customerEditingOrderReducer } from './customerEditingOrder'
import { customerEditingTicketReducer } from './customerEditingTicket'
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
    customerTicketsToolForm: customerTicketsToolFormReducer,
    customerCalculatorTool: customerCalculatorToolReducer,
    userInformation: userInformationReducer,
    customerPublicInformation: customerPublicInformationReducer,
    customerInformation: customerInformationReducer,
    userPreferencesForms: userPreferencesFormsReducer,
    customerEditingService:customerEditingServiceReducer,
    customerEditingReservation:customerEditingReservationReducer,
    customerSchedulePeriod:customerSchedulePeriodReducer,
    customerEditingSchedule:customerEditingScheduleReducer,
    customerEditingOrder:customerEditingOrderReducer,
    customerEditingTicket:customerEditingTicketReducer,
})

export default rootReducer