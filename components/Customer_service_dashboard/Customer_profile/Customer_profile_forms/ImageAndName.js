import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationName } from '../../../../redux/actions/CustomerPublicInformation'
import axios from 'axios'
import { useState } from 'react'

function ImageAndName (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [temporalCustomerName, setTemporalCustomerName] = useState(customerInformation.name)
    const profileImage = 'IMAGEN DE PERFIL';
    const changeImageButton = 'Cambiar imágen'
    const serviceName = 'Escribe el nombre de tu servicio'
    const confirmButton = 'ACEPTAR'
    const dispatch = useDispatch()
    
    function updateCustomerName(newName){
        axios.patch(`api/customer/updateCustomerName.js`,{
            params:{
                userId:customerInformation.userId,
                newName
            }
        })
        .then(response => {
            if(response.success){
                dispatch(changeCustomerPublicInformationName(temporalCustomerName))
            }
        })
        .catch(err => console.log(err))
    }

    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            <div className={styles.ModalContainer}>
                <div className={styles.ProfileImageFormContainer}>
                    <div className={styles.ProfileImage}></div>
                    <div className={styles.ProfileImageButtonContainer}>
                        <button className={styles.ProfileImageButton}>{changeImageButton}</button>
                    </div>
                </div>
                <div className={styles.ProfileNameContainer}>
                    <input type='text' className={styles.ProfileName} placeholder={serviceName}/>
                </div>
                <div className={styles.ConformButtonContainer}>
                    <button className={styles.ConfirmButton}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default ImageAndName