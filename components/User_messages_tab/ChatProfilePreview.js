import styles from '../../styles/UserMessages.module.css'
import {changeMessagesToChat} from '../../redux/actions/UserMessagesTab'
import {useDispatch} from 'react-redux'
import Image from 'next/image'
function ChatProfilePreview (){
    const profileImage = 'IMAGEN DE PERFIL'
    const name = 'Nombre del servicio'
    const schedule = '8:00 a 16:00'
    const dispatch = useDispatch()
    function handleChatPress(){
        dispatch(changeMessagesToChat())
    }
    return(
        <div className={styles.ChatContainer} onClick={handleChatPress}>

            <Image src='/celerPerfil.png' height={80} width={80}/>

            <div className={styles.ChatDescription}>
                <div className={styles.ChatName}>{name}</div>
                <div className={styles.ChatSchedule}>{schedule}</div>
            </div>

        </div>
    )
}

export default ChatProfilePreview