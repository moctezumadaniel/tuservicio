import styles from '../../styles/CustomerServiceDashboard.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeCustomerDashboardTabToProfile, changeCustomerDashboardTabToReservations, changeCustomerDashboardTabToTools} from '../../redux/actions/CustomerDashboardTab'
function ServiceTabButtons (){
    const profileDescription = 'Perfil';
    const reservationsDescription = 'Reservaciones';
    const toolsDescription = 'Herramientas';
    const dispatch = useDispatch()
    const currentTab = useSelector(state=>state.customerDashboardTab)
    function handleProfilePress(){
        dispatch(changeCustomerDashboardTabToProfile())
    }
    function handleReservationsPress(){
        dispatch(changeCustomerDashboardTabToReservations())
    }
    function handleToolsPress(){
        dispatch(changeCustomerDashboardTabToTools())
    }

    return(
        <div className={styles.TabButtonsCantainer}>

            <button className={currentTab === 'Profile'? styles.TabButtonActive : styles.TabButton}
            onClick={handleProfilePress}>
                {profileDescription}
            </button>

            <button className={currentTab === 'Reservations'? styles.TabButtonActive : styles.TabButton}
            onClick={handleReservationsPress}>
                {reservationsDescription}
            </button>

            <button className={currentTab === 'Tools'? styles.TabButtonActive : styles.TabButton} 
            onClick={handleToolsPress}>
                {toolsDescription}
            </button>

        </div>
    )
}
export default ServiceTabButtons