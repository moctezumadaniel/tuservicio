import styles from '../../styles/MainTabButtons.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeGlobalToServices, changeGlobalToPreferences, changeGlobalToMessages} from '../../redux/actions/GlobalTab'
import {changeMessagesTabToList} from '../../redux/actions/UserMessagesTab'
import {changeToolToNone} from '../../redux/actions/CustomerActiveTool'
import {changeOrdersToolToDashboard} from '.././../redux/actions/OrdersTool'
import {changeExpenseToolToDashboard} from '../../redux/actions/ExpenseTool'
import {changeCustomersToolToDashboard} from '../../redux/actions/CustomersTool'
function MainTabButtons (){
    const currentTab = useSelector(state=>state.globalTab);
    const currentCustomerTool = useSelector(state=>state.customerActiveTool)
    const currentOrdersToolTab = useSelector(state=>state.ordersTool)
    const currentExpensesToolTab = useSelector(state=>state.expensesTool)
    const currentCustomersTab = useSelector(state=>state.customersTool)
    const currentServiceDashboardTab = useSelector(state=>state.customerDashboardTab)
    const messagesStatus = useSelector(state=>state.userMessagesTab)
    const closeDescription = "< SALIR"
    const goBackDescription = "< ATRAS"
    const dispatch = useDispatch();

    function handleServicesPress(){
        dispatch(changeGlobalToServices())
    }
    function handlePreferencesPress(){
        dispatch(changeGlobalToPreferences())
    }
    function handleMessagesPress(){
        dispatch(changeGlobalToMessages())
    }
    function handleCloseChatPress(){
        dispatch(changeMessagesTabToList())
    }
    function handleCloseToolPress(){
        dispatch(changeToolToNone())
    }
    function handleGoBackToOrders(){
        dispatch(changeOrdersToolToDashboard())
    }
    function handleGoBackToExpenses(){
        dispatch(changeExpenseToolToDashboard())
    }
    function handleGoBackToCustomers(){
        dispatch(changeCustomersToolToDashboard())
    }
    
    return(
        <div className={styles.MainTabButtonsContainer}>
            {(currentTab === 'Services' && currentServiceDashboardTab === 'Tools' && currentOrdersToolTab === 'Order' && currentCustomerTool !== 'None')?
            <button className={styles.MainCloseChat}
            onClick={handleGoBackToOrders}>
                {goBackDescription}
            </button>
            :(currentTab === 'Services' && currentServiceDashboardTab === 'Tools' && currentExpensesToolTab === 'Expense' && currentCustomerTool !== 'None')?
            <button className={styles.MainCloseChat}
            onClick={handleGoBackToExpenses}>
                {goBackDescription}
            </button>
            :(currentTab === 'Services' && currentServiceDashboardTab === 'Tools' && currentCustomersTab !== 'Dashboard' && currentCustomerTool !== 'None')?
            <button className={styles.MainCloseChat}
            onClick={handleGoBackToCustomers}>
                {goBackDescription}
            </button>
            :(currentTab === 'Services' && currentServiceDashboardTab === 'Tools'&& currentCustomerTool !== 'None')?
            <button className={styles.MainCloseChat}
            onClick={handleCloseToolPress}>
                {closeDescription}
            </button>
            :
            <button className={currentTab === 'Services' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handleServicesPress}>
                Servicios
            </button>
            }

            {
            (messagesStatus === 'Chat' && currentTab === 'Messages')?
            <button className={styles.MainCloseChat}
            onClick={handleCloseChatPress}>
                {closeDescription}
            </button>
            :
            <button className={currentTab === 'Messages' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handleMessagesPress}>
                Mensajes
            </button>
            }

            <button className={currentTab === 'Preferences' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handlePreferencesPress}>
                Preferencias
            </button>
            
        </div>
    )
}

export default MainTabButtons