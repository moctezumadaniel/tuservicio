import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import ServicesSearch from './ServicesSearch';
import UserPreviousServices from './UserPreviousServices'
import UserReservations from './UserReservations'
import UserFavouriteServices from './UserFavouriteServices'

import { useSelector, useDispatch } from 'react-redux';
function UserServicesTab(){
    const currentTab = useSelector(state=>state.userServicesTab)
    return(
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
    );
}

export default UserServicesTab
