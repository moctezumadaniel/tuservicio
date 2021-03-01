import styles from '../../styles/CustomerProfileTemplate.module.css'

function MoreInformation (){
    const directionDescription = "Dirección";
    const serviceScore = "5 stars";
    const moreInformationDescription = "Información"
    return(
        <div className={styles.MoreInformationContainer}>   
            <button>{directionDescription}</button>
            <div>{serviceScore}</div>
            <button>{moreInformationDescription}</button>
        </div>
    )
}
export default MoreInformation