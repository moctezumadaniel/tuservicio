import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationSchedule } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'


function Schedule (){
    const customerInformation = useSelector(state => state.CustomerPublicInformation)
    const [temporalSchedule, setTemporalSchedule] = useState(customerInformation.schedule)
    const dispatch = useDispatch();
    const toConector = ' a '
    const workdays = 'Dias de atención de:'
    const monday = 'Lunes de:';
    const tuesday = 'Mártes de:';
    const wednesday = 'Miércoles de:';
    const thursday = 'Jueves de:'
    const friday = 'Viernes de:';
    const saturday = 'Sabado de:';
    const sunday = 'Domingo de:';
    const confirmButton = 'ACEPTAR'
    function handleCloseForm (){
        dispatch(changeCustomerProfileFormToNone())
    }
    function updateCustomerSchedule(schedule){
        axios.patch(`api/customer/updateCustomerSchedule`,{
            params:{
                userId:customerInformation.userId,
                schedule
            }
        })
        .then(response => {
            if(response.success){
                dispatch(changeCustomerPublicInformationSchedule(temporalSchedule))
            }
        })
        .catch(error => console.log(error))
    }
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>

            <div className={styles.ModalContainer}>
                <div className={styles.ScheduleFormsContainer}>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{workdays}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
            <div className={styles.ScheduleContainer}>
                        <div>{monday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{tuesday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{wednesday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{thursday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{friday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{saturday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{sunday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}/>
                        </div>
                    </div>
                  
                </div>
                <div>
                    <button className={styles.ConfirmButton}
                    onClick={handleCloseForm}>{confirmButton}</button>
                </div>
            </div>
        </div>
    )
}
export default Schedule