import styles from '../../styles/CustomerProfileTemplate.module.css'
function CloseButton (){
    const buttonDescription = "SALIR"
      return(
          <div>
              <button className={styles.CloseButton}>
                  {buttonDescription}
              </button>
          </div>
      )
}

export default CloseButton