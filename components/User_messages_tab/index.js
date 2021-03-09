import styles from '../../styles/UserMessages.module.css'
import {useSelector} from 'react-redux'
import ListOfChats from './ListOfChats'
import Chat from './Chat'
function UserMessagesTab (){
    const currentTab = useSelector(state=>state.userMessagesTab)
    const globalTab = useSelector(state=>state.globalTab)
    return(
        globalTab === 'Messages'?
        <div className={styles.ChatsMainContainer}>
            {currentTab === 'Chat'?
                <Chat/>
            : <ListOfChats/>}
        </div>
        :""
    )
}
export default UserMessagesTab