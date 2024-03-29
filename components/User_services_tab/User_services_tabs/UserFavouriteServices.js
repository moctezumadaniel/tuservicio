import styles from '../../../styles/UserFavouriteServices.module.css'
import Image from 'next/image'
import { UserLogin } from '../../User_login'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector } from 'react-redux'

function UserFavouriteServices(){
    const {isAuthenticated, isLoading} = useAuth0()
    const defaultPage = 'Aún no tienes servicios favoritos'
    const image = "Imagen de perfil";
    const name = "Nombre del servicio";
    const score = "5 star";
    const todaySchedule = "8:00 a 16:00" /*Green when is open at the moment of the search*/
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    
    return(
        <>
        {!isAuthenticated && !isLoading?
        <UserLogin/>
        :
        <ListOfFavoriteServices/>
        }
        </>
    )
}
export default UserFavouriteServices

function ListOfFavoriteServices (){
    const favoriteServices = useSelector(state => state.userInformation.favoriteServices)
    if(favoriteServices.length > 0){
        return(
            <div className={styles.ServiceSearchMainContainer}>
                {favoriteServices.map(service => (
                <div className={styles.PreviewMainContainer}>

                    <div className={styles.ImageAndScoreContainer}>
                        <Image src='/celerPerfil.png' width={80} height={80}/>
                        <div>{service.score}</div>
                    </div>

                    <div className={styles.ServiceInformation}>
                        <div className={styles.ServiceName}>{service.name}</div>
                        <div className={styles.ServiceTodaySchedule}>{service.schedule}</div>
                        <div className={styles.ServiceDescription}>{service.description}</div>
                    </div>

                </div>
                ))

                }
            </div>
        )
    }
    else return(
        <div className={styles.ErrorMessage}>
            Aún no has agregado servicios favoritos
        </div>
    )
}