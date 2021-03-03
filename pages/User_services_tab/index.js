import UserServicesTabButtons from './UserServicesTabButtons'
import UserSearch from './UserSearch'
import ServicesSearch from './ServicesSearch';
function UserServicesTab(){
    return(
        <div>
            <UserSearch/>
           <UserServicesTabButtons/>
           <ServicesSearch/>
        </div>
    );
}

export default UserServicesTab
