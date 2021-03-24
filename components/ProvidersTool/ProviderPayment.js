import styles from '../../styles/ProvidersTool.module.css'

function ProviderPayment (){
    const nameInput = 'Escribe el nombre del proveedor';
    const amounthInput = 'Escribe el monto del pago'
    const save = 'GUARDAR PAGO';
    const share = 'COMPARTIR / GUARDAR'
    return(
        <div className={styles.CreditFormContainer}>
            <input type='text' className={styles.CustomerNameInput}
            placeholder={nameInput}/>
            <div className={styles.SecondaryInputsContainer}>
                <input type='date' className={styles.DateInput}/>
                <input type='number' className={styles.AmounthInput}
                placeholder={amounthInput}/>
            </div>
            <div className={styles.SecondaryButtonsContainer}>
                <button className={styles.SavePaymentButton}>{save}</button>
                <button className={styles.ShareButton}>{share}</button>
            </div>
            <textarea className={styles.TextAreaForm}/>
        </div>
    )
}
export default ProviderPayment