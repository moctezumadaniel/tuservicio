import { useSelector } from 'react-redux'
import UserNameForm from './UserNameForm'
import PhoneNumberForm from './PhoneNumberForm'
import EmailForm from './EmailForm'
import PasswordForm from './PasswordForm'
function PreferencesForms(){
    const currentForm = useSelector(state => state.userPreferencesForms)
    console.log(currentForm)
    switch(currentForm){
        case 'Name':
            return <UserNameForm/>
        case 'PhoneNumber':
            return <PhoneNumberForm/>
        case 'Email':
            return <EmailForm/>
        case 'Password':
            return <PasswordForm/>
        case 'None':
            return ""
        default:
            return ""
    }
}

export default PreferencesForms