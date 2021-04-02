export const customerProfileFormsReducer = (state='None', action)=>{
    switch(action.type){
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_NONE':
            return 'None';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_IMAGE_AND_NAME':
            return 'ImageAndName';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_SCHEDULE':
            return 'Schedule';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_SHORT_DESCRIPTION':
            return 'ShortDescription';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_WORKDAYS':
            return 'Workdays';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_PHONE_NUMBER':
            return 'PhoneNumber';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_ADDRESS':
            return 'Address';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_MORE_INFORMATION':
            return 'MoreInformation';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_SERVICE_IMAGES':
            return 'ServiceImages';
        case 'CHANGE_CUSTOMER_PROFILE_FORM_TO_ADD_SERVICE':
            return 'AddService';
        default:
            return state;
    }
}