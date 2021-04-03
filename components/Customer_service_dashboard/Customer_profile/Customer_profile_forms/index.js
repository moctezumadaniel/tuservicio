import ImageAndName from './ImageAndName'
import Schedule from './Schedule'
import ShortDescription from './ShortDescription'
import Workdays from './Workdays'
import PhoneNumber from './PhoneNumber'
import Address from './Address'
import MoreInformation from './MoreInformation'
import ServiceImages from './ServiceImages'
import AddService from './AddService'
import {useSelector} from 'react-redux'
function CustomerProfileForms (){
    const currentForm = useSelector(state=>state.customerProfileForms)
    switch(currentForm){
        case 'None':
            return <ImageAndName/>;
        case 'ImageAndName':
            return <ImageAndName/>;
        case 'Schedule':
            return <Schedule/>;
        case 'ShortDescription':
            return <ShortDescription/>;
        case 'Workdays':
            return <Workdays/>;
        case 'PhoneNumber':
            return <PhoneNumber/>;
        case 'Address':
            return <Address/>;
        case 'MoreInformation':
            return <MoreInformation/>;
        case 'ServiceImages':
            return <ServiceImages/>;
        case 'AddService':
            return <AddService/>;
        default:
            return "";
    }
} 
export default CustomerProfileForms