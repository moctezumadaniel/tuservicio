import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
import { changeCustomerPublicInformationSchedule } from '../../../../redux/actions/CustomerPublicInformation'
import { useState } from 'react'
import axios from 'axios'


function Schedule (){
    const customerInformation = useSelector(state => state.customerPublicInformation)
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
    function updateCustomerSchedule(customerId,schedule){
        axios.patch(`api/customer/updateCustomerSchedule`,{
            customerId,
            schedule
        })
        .then(response => {
            if(response.data){
                dispatch(changeCustomerPublicInformationSchedule(response.data.schedule),
                dispatch(changeCustomerProfileFormToNone()))
                console.log(response)
            }
        })
        .catch(error => console.log(error))
    }
    function handleChangeOpening(event){
        const newDate = event.target.value
        const day = event.target.name
        setTemporalSchedule({...temporalSchedule, 
            [day]:{...temporalSchedule[day], opening:newDate}
        })
    }
    function handleChangeClosing(event){
        const newDate = event.target.value
        const day = event.target.name
        setTemporalSchedule({...temporalSchedule, 
            [day]:{...temporalSchedule[day], closing:newDate}
        })
    }
    function handleChangeAllOpening(event){
        const newDate = event.target.value
        setTemporalSchedule({
            monday:{...temporalSchedule.monday, opening:newDate},
            tuesday:{...temporalSchedule.tuesday, opening:newDate},
            wednesday:{...temporalSchedule.wednesday, opening:newDate},
            thursday:{...temporalSchedule.thursday, opening:newDate},
            friday:{...temporalSchedule.friday, opening:newDate},
            saturday:{...temporalSchedule.saturday, opening:newDate},
            sunday:{...temporalSchedule.sunday, opening:newDate}
        })
    }
    function handleChangeAllClosing(event){
        const newDate = event.target.value
        setTemporalSchedule({
            monday:{...temporalSchedule.monday, closing:newDate},
            tuesday:{...temporalSchedule.tuesday, closing:newDate},
            wednesday:{...temporalSchedule.wednesday, closing:newDate},
            thursday:{...temporalSchedule.thursday, closing:newDate},
            friday:{...temporalSchedule.friday, closing:newDate},
            saturday:{...temporalSchedule.saturday, closing:newDate},
            sunday:{...temporalSchedule.sunday, closing:newDate}
        })
    }
    console.log(temporalSchedule)
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
                            <input type='time' className={styles.ScheduleDateInput}
                            onChange={(event)=>handleChangeAllOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            onChange={(event)=>handleChangeAllClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
            <div className={styles.ScheduleContainer}>
                        <div>{monday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='monday'
                            value={temporalSchedule.monday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='monday'
                            value={temporalSchedule.monday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{tuesday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='tuesday'
                            value={temporalSchedule.tuesday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='tuesday'
                            value={temporalSchedule.tuesday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{wednesday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='wednesday'
                            value={temporalSchedule.wednesday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='wednesday'
                            value={temporalSchedule.wednesday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{thursday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='thursday'
                            value={temporalSchedule.thursday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='thursday'
                            value={temporalSchedule.thursday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{friday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='friday'
                            value={temporalSchedule.friday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='friday'
                            value={temporalSchedule.friday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{saturday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='saturday'
                            value={temporalSchedule.saturday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='saturday'
                            value={temporalSchedule.saturday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
            {/*SCHEDULE ITEM */}
                    <div className={styles.ScheduleContainer}>
                        <div>{sunday}</div>
                        <div>
                            <input type='time' className={styles.ScheduleDateInput}
                            name='sunday'
                            value={temporalSchedule.sunday.opening}
                            onChange={(event)=>handleChangeOpening(event)}/>
                            {toConector}
                            <input type='time' className={styles.ScheduleDateInput}
                            name='sunday'
                            value={temporalSchedule.sunday.closing}
                            onChange={(event)=>handleChangeClosing(event)}/>
                        </div>
                    </div>
                  
                </div>
                <div>
                    <button className={styles.ConfirmButton}
                    onClick={()=>updateCustomerSchedule(customerInformation.customerId,temporalSchedule)}>
                        {confirmButton}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Schedule