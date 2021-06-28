import styles from '../../../../styles/CustomerProfileForms.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationWorkdays } from '../../../../redux/actions/CustomerPublicInformation'
import axios from 'axios'
import { useState } from 'react';
function Workdays (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
    const [temporalWorkdays, setTemporalWorkdays] = useState(customerInformation.workdays)
    const dispatch = useDispatch();
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone(),
        console.log('PRESIONADO'))
    }

    function updateCustomerWorkdays(workdays){
        axios.patch(`api/customer/updateCustomerWorkdays`,{
            params:{
                customerId:customerInformation.customerId,
                workdays
            }
        })
        .then(response =>{
            if(response.success){
                dispatch(changeCustomerPublicInformationWorkdays(temporalWorkdays))
            }
        })
        .catch(error => console.log(error))
    }
    const instructions = 'Marca los días que prestas servicios'
    const monday = 'Lunes';
    const tuesday = 'Mártes';
    const wednesday = 'Miércoles';
    const thursday = 'Jueves'
    const friday = 'Viernes';
    const saturday = 'Sabado';
    const sunday = 'Domingo';

    const confirmButton = 'ACEPTAR'
    const handleChackboxPress=(event)=>{
        const day = event.target.value
        const checked = event.target.checked
        dispatch(changeCustomerPublicInformationWorkdays(day,checked))
    }
    console.log(customerInformation.workdays)
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            <div className={styles.ModalContainer}>
                <label className={styles.Workday}>
                    <input type="checkbox" value='monday' 
                    checked={customerInformation.workdays.monday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{monday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='tuesday'
                    checked={customerInformation.workdays.tuesday}
                    className={styles.WorkdayCheckbox}/>{tuesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='wednesday'
                    checked={customerInformation.workdays.wednesday}
                    className={styles.WorkdayCheckbox}/>{wednesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='thursday'
                    checked={customerInformation.workdays.thursday}
                    className={styles.WorkdayCheckbox}/>{thursday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='friday'
                    checked={customerInformation.workdays.friday}
                    className={styles.WorkdayCheckbox}/>{friday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='saturday'
                    checked={customerInformation.workdays.saturday}
                    className={styles.WorkdayCheckbox}/>{saturday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='sunday'
                    checked={customerInformation.workdays.sunday}
                    className={styles.WorkdayCheckbox}/>{sunday}
                </label>
                <div className={styles.FullWidthContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={handleCloseForm}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default Workdays