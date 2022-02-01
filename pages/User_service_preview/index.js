/*import {connectToDatabase} from '../../middleware/mongodb'*/
import styles from "../../styles/UserServiceSearch.module.css";
import Image from "next/image";
// import { useDispatch }from 'react-redux'
// import { changeToServicePage } from '../../redux/actions/UserServicesTab'
export default function UserServicePreview() {
  const image = "Imagen de perfil";
  const name = "Nombre del servicio";
  const score = "5 star";
  const todaySchedule =
    "8:00 a 16:00"; /*Green when is open at the moment of the search*/
  const description =
    "Este es un ejemplo de la descripcion corta de un servicio que no deberá exedor de 140 caracteres";
  // const dispatch = useDispatch()

  // function handlePreviewPress(){
  //     dispatch(changeToServicePage())
  // }
  return (
    <a className={styles.PreviewMainContainer}>
      <div className={styles.ImageAndScoreContainer}>
        <Image src="/celerPerfil.png" width={80} height={80} />
        <div>{score}</div>
      </div>
      <div className={styles.ServiceInformation}>
        <div className={styles.ServiceName}>{name}</div>
        <div className={styles.ServiceTodaySchedule}>{todaySchedule}</div>
        <div className={styles.ServiceDescription}>{description}</div>
      </div>
    </a>
  );
}

/*export async function getServerSideProps(context){
    const { db } = await connectToDatabase();
    
    const data = await db.collection("customers_public_data").find({}).limit(20).toArray()
   

    const properties = JSON.parse(JSON.stringify(data));

    
    return{
        props: {properties:properties}
    }
}*/
