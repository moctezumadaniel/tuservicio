import styles from '../../styles/ProvidersTool.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {
    changeProvidersToolCreditFormName,
    changeProvidersToolCreditFormDate,
    changeProvidersToolCreditFormAmounth,
    changeProvidersToolCreditFormDescription
} from '../../redux/actions/ProvidersTool'

function ProviderCredit (){
    const nameInput = 'Escribe el nombre del proveedor';
    const amounthInput = 'Escribe el monto del crédito'
    const save = 'GUARDAR CRÉDITO';
    const share = 'COMPARTIR / GUARDAR'
/*FORM STATE */
    const formState = useSelector(state=>state.providersToolCreditForm)
    const dispatch = useDispatch();
    const handleProviderNameChange = event =>{
        dispatch(changeProvidersToolCreditFormName(event.target.value))
    }
    const handleDateChange = event =>{
        dispatch(changeProvidersToolCreditFormDate(event.target.value))
    }
    const handleAmounthChange = event =>{
        dispatch(changeProvidersToolCreditFormAmounth(event.target.value))
    }
    const handleDescriptionChange = event =>{
        dispatch(changeProvidersToolCreditFormDescription(event.target.value))
    }
    console.log(formState)
    return(
        <div className={styles.CreditFormContainer}>
            <input type='text' className={styles.CustomerNameInput}
            placeholder={nameInput}
            value={formState.providerName}
            onChange={handleProviderNameChange}/>
            <div className={styles.SecondaryInputsContainer}>
                <input type='date' className={styles.DateInput}
                value={formState.date}
                onChange={handleDateChange}/>
                <input type='number' className={styles.AmounthInput}
                placeholder={amounthInput}
                value={formState.amounth}
                onChange={handleAmounthChange}/>
            </div>
            <div className={styles.SecondaryButtonsContainer}>
                <button className={styles.SaveCreditButton}>{save}</button>
                <button className={styles.ShareButton}>{share}</button>
            </div>
            <textarea className={styles.TextAreaForm}
            value={formState.description}
            onChange={handleDescriptionChange}/>
        </div>
    )
}
export default ProviderCredit