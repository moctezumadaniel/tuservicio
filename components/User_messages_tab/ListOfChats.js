import styles from '../../styles/UserMessages.module.css'
import ChatProfilePreview from './ChatProfilePreview'
function ListOfChats (){
    const chatSearchPlaceholder = "Escribe el nombre del servicio"/*CHANGE BETWEEN CUSTOMER AND USER */
    return(
        <div>
            <div className={styles.ChatSearchContainer}>
                <input type="search" className={styles.ChatSearch}
                placeholder={chatSearchPlaceholder}/>
            </div>
            <div className={styles.ListOfChatsContainer}>
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
        </div>
    )
}

export default ListOfChats