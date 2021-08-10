import styles from '../../../styles/UserPreviousServices.module.css'
import Image from 'next/image'
import { UserLogin } from '../../User_login'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'
function UserPreviousServices(){
    const {isAuthenticated, isLoading} = useAuth0()    
    return(
        <>
        {!isAuthenticated && !isLoading?
        <UserLogin/>:
        <ListOfPreviousServices/>
        }
        </>
    )
}
export default UserPreviousServices

function ListOfPreviousServices (){
    const previosServices = useSelector(state => state.userInformation.previousServices)
    if(previosServices.length > 0){
        return (
            <div className={styles.ServiceSearchMainContainer}>
                {previosServices.map(service => (
                <div className={styles.PreviewMainContainer}>

                    <div className={styles.ImageAndScoreContainer}>
                        <Image src='/celerPerfil.png' width={80} height={80}/>
                        <div>{score}</div>
                    </div>

                    <div className={styles.ServiceInformation}>
                        <div className={styles.ServiceName}>{service.name}</div>
                        <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
                        <div className={styles.ServiceDescription}>{description}</div>
                    </div>

                </div>
                ))

                }
            </div>
        )
    }
    else return (
        <div className={styles.ErrorMessage}>
            Aún no se ha registrado ninguna asistencia a una cita
        </div>
    )
}