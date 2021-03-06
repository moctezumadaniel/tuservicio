import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import ServicesSearch from '../../pages/User_services_tab/ServicesSearch';
import UserPreviousServices from '../../pages/User_services_tab/UserPreviousServices'
import UserReservations from '../../pages/User_services_tab/UserReservations'
import UserFavouriteServices from '../../pages/User_services_tab/UserFavouriteServices'

import { useSelector } from 'react-redux';
function UserServicesTab(){
    const currentTab = useSelector(state=>state.userServicesTab)
    const currentGlobalTab = useSelector(state=>state.globalTab)
    return(
        currentGlobalTab === 'Services' ?
        <div>
            <UserSearch/>
           <UserServicesTabButtons/>

           {currentTab === 'Search'?
            <ServicesSearch/>
           :""}

           {currentTab === 'Reservations'?
            <UserReservations/>
           :""}

           {currentTab === 'Favourites'?
            <UserFavouriteServices/>
           :""}
            
           {currentTab === 'Previous'?
            <UserPreviousServices/>
           :""}
           
        </div>
        :""
    );
}

export default UserServicesTab
