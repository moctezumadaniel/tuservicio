import styles from '../../styles/MainTabButtons.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {changeGlobalToServices, changeGlobalToPreferences, changeGlobalToMessages} from '../../redux/actions/GlobalTab'
import {changeMessagesTabToList} from '../../redux/actions/UserMessagesTab'
function MainTabButtons (){
    const currentTab = useSelector(state=>state.globalTab);
    const messagesStatus = useSelector(state=>state.userMessagesTab)
    const closeChatDescription = "< SALIR"
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

    return(
        <div className={styles.MainTabButtonsContainer}>

            <button className={currentTab === 'Services' ? styles.MainTabButtonActive : styles.MainTabButton}
            onClick={handleServicesPress}>
                Servicios
            </button>

            {
            (messagesStatus === 'Chat' && currentTab === 'Messages')?
            <button className={styles.MainCloseChat}
            onClick={handleCloseChatPress}>
                {closeChatDescription}
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