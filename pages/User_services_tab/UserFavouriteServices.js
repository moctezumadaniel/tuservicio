import styles from '../../styles/UserServices.module.css'
function UserFavouriteServices(){
    const defaultPage = "Aún no has agregado servicios favoritos."
    return(
        <div className={styles.UserFavouritesContainer}>
            {defaultPage}
        </div>
    )
}
export default UserFavouriteServices