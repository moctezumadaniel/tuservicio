import styles from '../../styles/UserServices.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeToReservations, changeToFavourites, changeToPrevious} from '../../redux/actions/UserServicesTab'


function UserServicesTabButtons(){
    const dispatch = useDispatch();
    const tabActive = useSelector(state=>state.userServicesTab)

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

            <button 
            className={tabActive === 'Reservations'? styles.TabButtonsActive : styles.TabButtons}
            onClick={handleReservationsButton}>
                Reservaciones
            </button>

            <button 
            className={tabActive === 'Previous'? styles.TabButtonsActive : styles.TabButtons}
            onClick={handlePreviousButton}>
                Anteriores
            </button>

            <button 
            className={tabActive === 'Favourites'? styles.TabButtonsActive : styles.TabButtons}
            onClick={handleFavouritesButton}>
                Favoritos
            </button>
        </div>
    );
}

export default UserServicesTabButtons