import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import UserServiceSearch from '../Services_search';
import UserPreviousServices from './User_services_tabs/UserPreviousServices'
import UserReservations from './User_services_tabs/UserReservations'
import UserFavouriteServices from './User_services_tabs/UserFavouriteServices'
import { useSelector } from 'react-redux';
function UserServicesTab(){
    const currentTab = useSelector(state=>state.userServicesTab)
    const currentGlobalTab = useSelector(state=>state.globalTab)
    window.scrollTo(0,0)

    return(
        currentGlobalTab === 'Services' ?
        <div>
            <UserSearch/>
           <UserServicesTabButtons/>

           {currentTab === 'Search'?
            <UserServiceSearch />
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
