import {useDispatch} from 'react-redux'
import {changeMessagesTabToList} from '../../redux/actions/UserMessagesTab'
import CustomerMessage from './CustomerMessage'
import UserMessage from './UserMessage'
import styles from '../../styles/UserMessages.module.css'
function Chat (){
    const addServiceToFavorites = 'Añadir a favoritos'
    const profileImage = 'IMAGEN DE PERFIL'
    const reportService = 'Reportar servicio'
    const placeholder = 'Escribe aqui tu mensaje'
    const dispatch = useDispatch()
    function handleCloseChat(){
        dispatch(changeMessagesTabToList())
    }
   return(
       <div className={styles.ChatMainContainer}>
           <div className={styles.ChatHeader}>
               <button className={styles.FavouriteButton}>{addServiceToFavorites}</button>
               <div className={styles.ChatHeaderImage}>{profileImage}</div>
               <button className={styles.ReportButton}>{reportService}</button>
           </div>
           <div className={styles.MessagesMainContainer}>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
                <CustomerMessage/>
                <UserMessage/>
           </div>
           <div className={styles.BottomContainer}>
               <input className={styles.MessageInput}
               placeholder={placeholder}/>
           </div>
       </div>
   ) 
}

export default Chat