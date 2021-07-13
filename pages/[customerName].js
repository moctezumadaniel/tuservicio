import TopBar from './Customer_profile_template/Top_description'
import MoreInformation from './Customer_profile_template/MoreInformation'
import TabButtons from './Customer_profile_template/TabButtons'
import ServicesTab from './Customer_profile_template/ServicesTab'
import ReviewsTab from './Customer_profile_template/ReviewsTab'
import BookingTab from './Customer_profile_template/BookingTab'
import CloseButton from './Customer_profile_template/CloseButton'
import axios from 'axios'
function CustomerProfileTemplate (){
    console.log(customerPublicInformation)
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

export async function getServerSideProps( {customerName} ){
    const customerInformation = await axios.get(`api/user/getCustomerPublicInformation`,{
        params:{
            customerName
        }
    })
    .then(response =>{
        if(response.data){
            console.log(response.data)
            return response.data.json()
        }else return {success: false}
    })
    .catch(error => console.log(error))
    return {props: customerInformation}
}