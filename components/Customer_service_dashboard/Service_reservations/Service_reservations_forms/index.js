import {useSelector} from 'react-redux'
import AddReservation from './AddReservation';
import AddSchedule from './AddSchedule';
import EditReservation from './EditReservation';
import EditSchedule from './EditSchedule';
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
        case 'EditSchedule':
            return <EditSchedule/>
        default:
            return "";
    }
}
export default ServiceReservationsForms