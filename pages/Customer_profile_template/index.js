import TopBar from './Top_description'
import MoreInformation from './MoreInformation'
import TabButtons from './TabButtons'
import ServicesTab from './ServicesTab'
import ReviewsTab from './ReviewsTab'
import BookingTab from './BookingTab'
import CloseButton from './CloseButton'
import axios from 'axios'
function CustomerProfileTemplate (){
    return(
        <div>
            <TopBar/>
            <MoreInformation/>
            <TabButtons/>
            {/*<ServicesTab/>*/}
            {/*<ReviewsTab/>*/}
            <BookingTab/>
            <CloseButton/>

        </div>
    )
}

export default CustomerProfileTemplate