import TopBar from './Top_description'
import MoreInformation from './MoreInformation'
import TabButtons from './TabButtons'
import ServicesTab from './ServicesTab'
function CustomerProfileTemplate (){
    return(
        <div>
            <TopBar/>
            <MoreInformation/>
            <TabButtons/>
            <ServicesTab/>
        </div>
    )
}

export default CustomerProfileTemplate