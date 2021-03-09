import styles from '../../styles/MainTabButtons.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeGlobalToServices, changeGlobalToPreferences, changeGlobalToMessages} from '../../redux/actions/GlobalTab'
function MainTabButtons (){
    const currentTab = useSelector(state=>state.globalTab);
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
    return(
        <div className={styles.MainTabButtonsContainer}>

            <button className={currentTab === 'Services' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handleServicesPress}>
                Servicios
            </button>

            <button className={currentTab === 'Messages' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handleMessagesPress}>
                Mensajes
            </button>

            <button className={currentTab === 'Preferences' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handlePreferencesPress}>
                Preferencias
            </button>
            
        </div>
    )
}

export default MainTabButtons