import styles from '../../styles/UserMessages.module.css'
import {useSelector} from 'react-redux'
import ListOfChats from './ListOfChats'
import Chat from './Chat'
import { useAuth0 } from '@auth0/auth0-react'
import {UserLogin} from '../../components/User_login'

function UserMessagesTab (){
    const { isAuthenticated } = useAuth0()
    const currentTab = useSelector(state=>state.userMessagesTab)
    const globalTab = useSelector(state=>state.globalTab)
    if(isAuthenticated){
    return(
        globalTab === 'Messages'?
        <div className={styles.ChatsMainContainer}>
            {currentTab === 'Chat'?
                <Chat/>
            : <ListOfChats/>}
        </div>
        :""
    )}
    else if(!isAuthenticated && globalTab ==='Messages'){
        return(
            <UserLogin/>
        )
    }else return ""
}
export default UserMessagesTab