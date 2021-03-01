import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import UserServicePreview from '../User_service_preview';
function UserServicesTab(){
    return(
        <div>
            <UserSearch/>
           <UserServicesTabButtons/>
           <UserServicePreview/>
        </div>
    );
}

export default UserServicesTab
