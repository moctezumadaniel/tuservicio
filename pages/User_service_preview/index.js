import styles from '../../styles/UserServiceSearch.module.css'
import {useDispatch} from 'react-redux'
import {changeServiceSearchToProfile} from '../../redux/actions/UserServiceSearchTab'
export default function UserServicePreview(){
    const image = "Imagen de perfil";
    const name = "Nombre del servicio";
    const score = "5 star";
    const todaySchedule = "8:00 a 16:00" /*Green when is open at the moment of the search*/
    const description = "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres"
    const dispatch = useDispatch()
    function handlePreviewPress(){
        dispatch(changeServiceSearchToProfile())
    }
    return(
        <div className={styles.PreviewMainContainer} onClick={handlePreviewPress}>
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
    )
}

/*export async function getServerSideProps(context){
    const { db } = await connectToDatabase();
    
    const data = await db.collection("customers_public_data").toArray();
   

    const properties = data.map(property=>{
        return{
            image:property.profileImage,
            name:property.name,
            score: property.score,
            todaySchedule:property.schedule,
            description: property.description
        }
    })
    
    return{
        props: {properties}
    }
}*/