import ServicesSearch from '../../pages/User_services_tab/ServicesSearch'
import CustomerProfileTemplate from '../../pages/Customer_profile_template'
import {useSelector} from 'react-redux'
function UserServiceSearch (){
    const currentTab = useSelector(state=>state.userServiceSearchTab)
    return(
        currentTab === 'Profile' ?
        <CustomerProfileTemplate/>
        :<ServicesSearch/>

        
    )
}
export default UserServiceSearch