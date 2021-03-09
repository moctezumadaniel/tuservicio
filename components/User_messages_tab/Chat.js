import {useDispatch} from 'react-redux'
import {changeMessagesTabToList} from '../../redux/actions/UserMessagesTab'
function Chat (){
    const addServiceToFavorites = 'AÑADIR A FAVORITOS'
    const profileImage = 'IMAGEN DE PERFIL'
    const reportService = 'REPORTAR SERVICIO'
    const closeChat = 'CERRAR ESTA CONVERSACIÓN'
    const dispatch = useDispatch()
    function handleCloseChat(){
        dispatch(changeMessagesTabToList())
    }
   return(
       <div>
           <div>
               <button>{addServiceToFavorites}</button>
               <div>{profileImage}</div>
               <button>{reportService}</button>
           </div>
           <div>
                MENSAJES
           </div>
           <div>
               <input/>
               <button onClick={handleCloseChat}>{closeChat}</button>
           </div>
       </div>
   ) 
}

export default Chat