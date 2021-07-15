import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { useState } from 'react'
import axios from 'axios'
import { addServiceToCustomerPublicInformation } from '../../../../redux/actions/CustomerPublicInformation'

function EditService (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const customerEditingService = useSelector(state => state.customerEditingService)
    const [temporalEditingService, setTemporalEditingService] = useState(customerEditingService)
    const dispatch = useDispatch()
    const addImageLabel = "Agregar Imágen"
    const namePlaceholder = "Escribe nombre del servicio"
    const pricePlaceholder = "Escribe el precio del servicio"
    const descriptionPlaceholder = "Escribe una descripcion corta del servicio"
    const confirmButton = "ACEPTAR"
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateTemporalTitle(event){
        setTemporalEditingService({...temporalEditingService, title:event.target.value})
    }
    function updateTemporalImage(event){
        setTemporalEditingService({...temporalEditingService, image:event.target.value})
    }
    function updateTemporalPrice(event){
        setTemporalEditingService({...temporalEditingService, price:event.target.value})
    }
    function updateTemporalDescription(event){
        setTemporalEditingService({...temporalEditingService, description:event.target.value})
    }
    function updateEditingService(customerId, newService){
        axios.patch(`api/customer/updateCustomerEditingService`,{
                customerId,
                id:newService._id,
                title: newService.title,
                image: newService.image,
                price: newService.price,
                description: newService.description
        })
        .then(response => {
            if(response.data){
                dispatch(addServiceToCustomerPublicInformation(response.data.listOfServices),
                dispatch(changeCustomerProfileFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    console.log(temporalEditingService)
    console.log(customerInformation.listOfServices)
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                
                {/*IMAGE INPUT */}
                <input type='file' accept='image/*' 
                name="serviceImage"
                id="serviceImage"
                value={temporalEditingService.image}
                className={styles.ServiceImageInput} /*HIDDENT TO AVOID DEFAULT UGLY LABELS */
                onChange={(event)=>updateTemporalImage(event)}
                />
                <label for="serviceImage"
                className={styles.ServiceImage}>
                    <div className={styles.ServiceImageLabel}>{addImageLabel}</div>
                </label>

                {/*NAME AND PRICE INPUTS */}
                <div className={styles.ServiceNamePriceDescription}>
                    <input type='text' className={styles.ServiceNamePriceDescriptionInput}
                    placeholder={namePlaceholder}
                    value={temporalEditingService.title}
                    onChange={(event)=>updateTemporalTitle(event)}
                    />

                    <input type='number' className={styles.ServiceNamePriceDescriptionInput}
                    placeholder={pricePlaceholder}
                    value={temporalEditingService.price}
                    onChange={(event)=>updateTemporalPrice(event)}/>
                </div>

                <textarea className={styles.ServiceDescription}
                placeholder={descriptionPlaceholder}
                value={temporalEditingService.description}
                onChange={(event)=>updateTemporalDescription(event)}/>

                <div className={styles.ServiceFormContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>updateEditingService(customerInformation.customerId, temporalEditingService)}>
                        {confirmButton}
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default EditService