import styles from '../../styles/UserMessages.module.css'
import {useSelector} from 'react-redux'
import ChatProfilePreview from './ChatProfilePreview'
function UserMessagesTab (){
    const globalTab = useSelector(state=>state.globalTab)
    return(
        globalTab === 'Messages'?
        <div className={styles.ChatsMainContainer}>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
            <ChatProfilePreview/>
        </div>
        :""
    )
}
export default UserMessagesTab