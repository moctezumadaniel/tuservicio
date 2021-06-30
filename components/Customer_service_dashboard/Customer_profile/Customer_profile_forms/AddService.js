import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { useState } from 'react'
import axios from 'axios'
import { addServiceToCustomerPublicInformation } from '../../../../redux/actions/CustomerPublicInformation'

function AddService (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [temporalService, setTemporalService] = useState({
        title:"",
        image:"",
        price:"",
        description:""
    })
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
        setTemporalService({...temporalService, title:event.target.value})
    }
    function updateTemporalImage(event){
        setTemporalService({...temporalService, image:event.target.value})
    }
    function updateTemporalPrice(event){
        setTemporalService({...temporalService, price:event.target.value})
    }
    function updateTemporalDescription(event){
        setTemporalService({...temporalService, description:event.target.value})
    }
    function addCustomerService(customerId, newService){
        axios.post(`api/customer/addCustomerService`,{
            customerId,
            title: newService.title,
            image: newService.image,
            price: newService.price,
            description: newService.description
        })
        .then(response => {
            if(response.data){
                dispatch(addServiceToCustomerPublicInformation(response.data.listOfServices))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    console.log(temporalService)
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
                    onChange={(event)=>updateTemporalTitle(event)}
                    />

                    <input type='number' className={styles.ServiceNamePriceDescriptionInput}
                    placeholder={pricePlaceholder}
                    onChange={(event)=>updateTemporalPrice(event)}/>
                </div>

                <textarea className={styles.ServiceDescription}
                placeholder={descriptionPlaceholder}
                onChange={(event)=>updateTemporalDescription(event)}/>

                <div className={styles.ServiceFormContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>addCustomerService(customerInformation.customerId, temporalService)}>{confirmButton}</button>
                </div>
                
            </div>
        </div>
    )
}
export default AddService