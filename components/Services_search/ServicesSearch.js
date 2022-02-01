import styles from "../../styles/UserServiceSearch.module.css";
import { ButtonUserLogin } from "../User_login";
import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
import { useSelector } from "react-redux";

function ServicesSearch() {
  const { isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      {!isAuthenticated && !isLoading ? <ButtonUserLogin /> : ""}
      <div className={styles.ServiceSearchMainContainer}>
        <UserServicesPreview />
      </div>
    </>
  );
}

export default ServicesSearch;

function UserServicesPreview() {
  const currentServices = useSelector((state) => state.userDisplayedServices);
  const searchStatus = useSelector((state) => state.userServiceSearch);
  const stars = "estrellas";
  const currentDay = () => {
    const dayDictionary = {
      0: "sunday",
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
    };
    const dayNumber = new Date().getDay();
    return dayDictionary[dayNumber];
  };
  const currentSchedule = (service) => {
    const day = currentDay();
    if (service.workdays[day] == true) {
      return `${service.schedule[day].opening} a ${service.schedule[day].closing}`;
    } else return `Cerrado hoy`;
  };
  console.log(currentServices);
  console.log(currentDay());
  if (currentServices.length > 0 && searchStatus === "Done") {
    return currentServices.map((service) => (
      <a
        className={styles.PreviewMainContainer}
        key={service._id}
        href={service.href || ""}
      >
        <div className={styles.ImageAndScoreContainer}>
          <Image src="/celerPerfil.png" width={80} height={80} />
          <div>{service.rating ? `${service.rating} ${stars}` : ""}</div>
        </div>
        <div className={styles.ServiceInformation}>
          <div className={styles.ServiceName}>{service.name}</div>
          <div className={styles.ServiceTodaySchedule}>
            {currentSchedule(service)}
          </div>
          <div className={styles.ServiceDescription}>
            {service.shortDescription}
          </div>
        </div>
      </a>
    ));
  } else if (searchStatus === "Searching") {
    return <div className={styles.SearchingMessage}>Buscando...</div>;
  } else if (searchStatus === "Done") {
    return <div className={styles.ErrorMessage}>Sin servicios encontrados</div>;
  }
  return "";
}
