import styles from '../../../styles/UserPreviousServices.module.css'
function UserPreviousServices(){
    const defaultPage = 'Aún no tienes servicios previos'
    const image = "Imagen de perfil";
    const name = "Nombre del servicio";
    const score = "5 star";
    const todaySchedule = "8:00 a 16:00" /*Green when is open at the moment of the search*/
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    
    return(
        <div className={styles.ServiceSearchMainContainer}>
            {/*<div>{defaultPage}</div>*/}
            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>

            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>

            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>

            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>

            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>

            {/*PREVIOUS SERVICE */}
            <div className={styles.PreviewMainContainer}>
                <div className={styles.ImageAndScoreContainer}>
                    <image>{image}</image>
                    <div>{score}</div>
                </div>
                <div className={styles.ServiceInformation}>
                    <div className={styles.ServiceName}>{name}</div>
                    <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                    <div className={styles.ServiceDescription}>{description}</div>
                </div>
            </div>
        </div>
    )
}
export default UserPreviousServices