import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import UserServiceSearch from '../Services_search';
import UserPreviousServices from './User_services_tabs/UserPreviousServices'
import UserReservations from './User_services_tabs/UserReservations'
import UserFavouriteServices from './User_services_tabs/UserFavouriteServices'
import CustomerProfileTemplate from '../../pages/Customer_profile_template/index'
import { useSelector } from 'react-redux';
import {useEffect} from 'react'


function UserServicesTab(){
    const currentTab = useSelector(state=>state.userServicesTab)
    const currentGlobalTab = useSelector(state=>state.globalTab)
    useEffect(()=>window.scrollTo(0,0))

    if(currentGlobalTab === 'Services' && currentTab !== 'ServicePage'){
        return(
        <div>
        <UserSearch/>
        <UserServicesTabButtons/>
        <CurrentServicesTab/>
        </div>
        )
    }else if (currentGlobalTab === 'Services'){
        return(
        <CurrentServicesTab/>
        )
    }else{
        return ""
    }
}

export default UserServicesTab

function CurrentServicesTab(){
    const currentTab = useSelector(state=>state.userServicesTab)
    switch(currentTab){
        case 'Search':
            return <UserServiceSearch />;
        case 'Reservations':
            return <UserReservations/>
        case 'Favourites':
            return <UserFavouriteServices/>;
        case 'Previous':
            return <UserPreviousServices/>
        case 'ServicePage':
            return <CustomerProfileTemplate/>
        default:
            return ""
    }
}