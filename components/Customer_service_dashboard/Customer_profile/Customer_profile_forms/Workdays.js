import styles from '../../../../styles/CustomerProfileForms.module.css'
import {useDispatch} from 'react-redux';
import {changeCustomerProfileFormToNone} from '../../../../redux/actions/CustomerProfileForms'
function Workdays (){
    const dispatch = useDispatch();
    function handleCloseForm(){
        dispatch(changeCustomerProfileFormToNone(),
        console.log('PRESIONADO'))
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
    return(
        <div className={styles.MainContainer}>
            <div className={styles.ModalBackground}
            onClick={handleCloseForm}>
            </div>
            <div className={styles.ModalContainer}>
                <label className={styles.Workday}>
                    <input type="checkbox" value={monday} 
                    className={styles.WorkdayCheckbox}/>{monday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={tuesday}
                    className={styles.WorkdayCheckbox}/>{tuesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={wednesday}
                    className={styles.WorkdayCheckbox}/>{wednesday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={thursday}
                    className={styles.WorkdayCheckbox}/>{thursday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={friday}
                    className={styles.WorkdayCheckbox}/>{friday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={saturday}
                    className={styles.WorkdayCheckbox}/>{saturday}
                </label>
                <label className={styles.Workday}>
                    <input type="checkbox" value={sunday}
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