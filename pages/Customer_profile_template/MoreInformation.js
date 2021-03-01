import styles from '../../styles/CustomerProfileTemplate.module.css'

function MoreInformation (){
    const directionDescription = "Dirección";
    const serviceScore = "5 stars";
    const moreInformationDescription = "Mas información"
    const briefDescription = "Esta es una breve descripcion del servicio que no debera exeder de 120 letras"
    return(
        <div>
            <div className={styles.MoreInformationContainer}>   
                <button className={styles.AddressButton}>{directionDescription}</button>
                <div>{serviceScore}</div>
                <button className={styles.MoreInformationButton}>{moreInformationDescription}</button>
            </div>
            <div className={styles.BriefDescription}>{briefDescription}</div>
        </div>
    )
}
export default MoreInformation