import styles from '../../styles/UserServices.module.css'
import {useDispatch} from 'react-redux'
import {changeToReservations, changeToFavourites, changeToPrevious} from '../../redux/actions/UserServicesTab'
function UserServicesTabButtons(){
    const dispatch = useDispatch();

    function handleReservationsButton(){
        dispatch(changeToReservations())
    }
    function handlePreviousButton(){
        dispatch(changeToPrevious())
    }
    function handleFavouritesButton(){
        dispatch(changeToFavourites())
    }

    return(
        <div className={styles.TabButtonsContainer}>

            <button className={styles.TabButtonActive}
            onClick={handleReservationsButton}>
                Reservaciones
            </button>

            <button className={styles.TabButtons}
            onClick={handlePreviousButton}>
                Anteriores
            </button>

            <button className={styles.TabButtons}
            onClick={handleFavouritesButton}>
                Favoritos
            </button>
        </div>
    );
}

export default UserServicesTabButtons