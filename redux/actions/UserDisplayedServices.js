export const loadUserDisplayedServices = (services) =>{
    return{
        type:'LOAD_USER_DISPLAYED_SERVICES',
        services
    }
}

export const deleteUserDisplayedServices = () =>{
    return {
        type:'DELETE_USER_DISPLAYED_SERVICES',
    }
}