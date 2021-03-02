import TopBar from './Top_description'
import MoreInformation from './MoreInformation'
import TabButtons from './TabButtons'
import ServicesTab from './ServicesTab'
import ReviewsTab from './ReviewsTab'
function CustomerProfileTemplate (){
    return(
        <div>
            <TopBar/>
            <MoreInformation/>
            <TabButtons/>
            {/*<ServicesTab/>*/}
            <ReviewsTab/>
        </div>
    )
}

export default CustomerProfileTemplate