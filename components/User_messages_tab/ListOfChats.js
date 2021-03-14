import styles from '../../styles/UserMessages.module.css'
import ChatProfilePreview from './ChatProfilePreview'
function ListOfChats (){
    return(
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
    )
}

export default ListOfChats