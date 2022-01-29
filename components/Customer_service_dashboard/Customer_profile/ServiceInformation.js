import styles from "../../../styles/CustomerServiceDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomerProfileFormToImageAndName,
  changeCustomerProfileFormToWorkdays,
  changeCustomerProfileFormToSchedule,
  changeCustomerProfileFormToShortDescription,
} from "../../../redux/actions/CustomerProfileForms";

function ServiceInformation() {
  const dispatch = useDispatch();
  const titles = {
    information: "Información",
    serviceImageAndName: "Imágen y nombre",
    schedule: "Horarios de atención",
    description: "Descripción corta",
    workdays: "Dias de atención",
    editItemButton: "Cambiar",
    //NULL INFORMATION
    NullServiceImageAndName: "Establece la imágen y nombre de tu servicio",
    NullScheduleDays: "Establece tus días de atención",
    NullSchedule: "Establece tus horarios de atención",
    NullShortDescription: "Escribe un descrición corta de tu servicio",
    //DAYS
    monday: "Lunes",
    tuesday: "Martes",
    wednesday: "Miércoles",
    thursday: "Jueves",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
  };
  const workdays = (workdays) => {
    const keys = Object.keys(workdays);
    const result = keys.reduce((result, day) => {
      if (workdays[day] == true) {
        return result + `${titles[day]}, `;
      }
      return result;
    }, "");
    return result.slice(0, result.length - 2) || titles.NullSchedule;
  };

  const currentSchedule = (schedule, workdays) => {
    const keys = Object.keys(schedule);
    const result = keys.reduce((string, day) => {
      if (schedule[day].opening && schedule[day].closing && workdays[day]) {
        return (
          string +
          `${titles[day]} de ${schedule[day].opening} a ${schedule[day].closing}, `
        );
      }
      if (schedule[day].opening && workdays[day]) {
        return string + `${titles[day]} desde ${schedule[day].opening}, `;
      }
      if (schedule[day].closing && workdays[day]) {
        return string + ` ${titles[day]} hasta ${schedule[day].closing}, `;
      }
      return string;
    }, "");
    if (result === "") {
      return titles.NullSchedule;
    }
    return result.slice(0, result.length - 2);
  };
  const userInformation = useSelector(
    (state) => state.customerPublicInformation
  );
  function handleOpenNameAndImageForm() {
    dispatch(changeCustomerProfileFormToImageAndName());
  }

  function handleOpenWorkdaysForm() {
    dispatch(changeCustomerProfileFormToWorkdays());
  }

  function handleOpenScheduleForm() {
    dispatch(changeCustomerProfileFormToSchedule());
  }
  function handleOpenShortDescriptionForm() {
    dispatch(changeCustomerProfileFormToShortDescription());
  }

  return (
    <div className={styles.ServiceInformationContainer}>
      <div className={styles.informationTitle}>{titles.information}</div>

      <div className={styles.InformationContainer}>
        <div className={styles.InformationItemTitle}>
          {titles.serviceImageAndName}
        </div>
        <div className={styles.ImageInformation}>{userInformation.image}</div>
        <div>{userInformation.name || titles.NullServiceImageAndName}</div>
        <button
          className={styles.editItemButton}
          onClick={handleOpenNameAndImageForm}
        >
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.InformationContainer}>
        <div className={styles.InformationItemTitle}>{titles.workdays}</div>
        <div>{workdays(userInformation.workdays)}</div>
        <button
          className={styles.editItemButton}
          onClick={handleOpenWorkdaysForm}
        >
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.InformationContainer}>
        <div className={styles.InformationItemTitle}>{titles.schedule}</div>
        <div className={styles.Schedule}>
          {currentSchedule(userInformation.schedule, userInformation.workdays)}
        </div>
        <button
          className={styles.editItemButton}
          onClick={handleOpenScheduleForm}
        >
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.InformationContainer}>
        <div className={styles.InformationItemTitle}>{titles.description}</div>
        <div>
          {userInformation.shortDescription || titles.NullShortDescription}
        </div>
        <button
          className={styles.editItemButton}
          onClick={handleOpenShortDescriptionForm}
        >
          {titles.editItemButton}
        </button>
      </div>
    </div>
  );
}
export default ServiceInformation;
