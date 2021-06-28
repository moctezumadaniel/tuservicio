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

    function updateCustomerWorkdays(customerId,workdays){
        axios.patch(`api/customer/updateCustomerWorkdays`,{
            customerId,
            workdays
        })
        .then(response =>{
            if(response.data){
                dispatch(changeCustomerPublicInformationWorkdays(response.data.workdays))
                console.log(response)
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
        setTemporalWorkdays({...temporalWorkdays, [day]: checked})
        console.log(checked)
        console.log(day)
    }
    console.log(temporalWorkdays)
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            <div className={styles.ModalContainer}>
                <label className={styles.Workday}>
                    <input type="checkbox" value='monday'
                    checked={temporalWorkdays.monday} 
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{monday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='tuesday'
                    checked={temporalWorkdays.tuesday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{tuesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='wednesday'
                    checked={temporalWorkdays.wednesday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{wednesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='thursday'
                    checked={temporalWorkdays.thursday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{thursday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='friday'
                    checked={temporalWorkdays.friday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{friday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='saturday'
                    checked={temporalWorkdays.saturday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{saturday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value='sunday'
                    checked={temporalWorkdays.sunday}
                    onChange={(event)=>handleChackboxPress(event)}
                    className={styles.WorkdayCheckbox}/>{sunday}
                </label>
                <div className={styles.FullWidthContainer}>
                    <button className={styles.ConfirmButton}
                    onClick={()=>updateCustomerWorkdays(customerInformation.customerId,temporalWorkdays)}>
                        {confirmButton}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Workdays