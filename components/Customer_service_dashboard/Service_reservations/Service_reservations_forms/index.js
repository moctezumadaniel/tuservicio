import {useSelector} from 'react-redux'
import AddReservation from './AddReservation';
import AddSchedule from './AddSchedule';
function ServiceReservationsForms(){
    const currentForm = useSelector(state=>state.customerReservationsForms)
    switch(currentForm){
        case 'None':
            return "";
        case 'AddReservation':
            return <AddReservation/>
        case 'AddSchedule':
            return <AddSchedule/>
        default:
            return "";
    }
}
export default ServiceReservationsForms