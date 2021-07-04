import {useSelector} from 'react-redux'
import AddReservation from './AddReservation';
import AddSchedule from './AddSchedule';
import EditReservation from './EditReservation';
function ServiceReservationsForms(){
    const currentForm = useSelector(state=>state.customerReservationsForms)
    switch(currentForm){
        case 'None':
            return "";
        case 'AddReservation':
            return <AddReservation/>
        case 'AddSchedule':
            return <AddSchedule/>
        case 'EditReservation':
            return <EditReservation/>
        default:
            return "";
    }
}
export default ServiceReservationsForms