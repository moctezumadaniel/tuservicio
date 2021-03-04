import styles from '../../styles/CustomerProfileTemplate.module.css'

import BookingItem from './BookingItem'
import BookingModal from './BookingModal'
function BookingTab (){
    return(
        <div className={styles.BookingMainContainer}>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingItem/>
            <BookingModal/>
        </div>
    )
}
export default BookingTab