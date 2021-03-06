import UserServicePreview from "../User_service_preview"
import styles from '../../styles/UserServices.module.css'

function UserPreviousServices(){
    const defaultPage = "Aún no tienes servicios previos"
    return(
        <div className={styles.UserPreviousContainer}>
            {defaultPage}
        </div>
    )
}
export default UserPreviousServices