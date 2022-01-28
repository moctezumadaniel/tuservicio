import styles from "../../../styles/CustomerServiceDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomerProfileFormToPhoneNumber,
  changeCustomerProfileFormToAddress,
  changeCustomerProfileFormToMoreInformation,
  changeCustomerProfileFormToServiceImages,
} from "../../../redux/actions/CustomerProfileForms";
function ServiceContactAndMoreInfo() {
  const dispatch = useDispatch();
  const titles = {
    contactAndMore: "Contacto y más detalles",
    phoneNumber: "Número de telefono",
    address: "Dirección del servicio",
    moreInfo: "Mas información",
    images: "Imágenes",
    editItemButton: "Cambiar",
    //NULL INFORMATION
    NullPhoneNumber: "Escribe tu número de teléfono",
    NullAddress: "Escribe la dirección de tu servicio",
    NullMoreInfo: "Ecribe los detalles sobre tu servicio",
    NullImages: "Muestra imágenes de tu servicio",
  };
  const userInformation = useSelector(
    (state) => state.customerPublicInformation
  );
  function handlePhoneNumberPress() {
    dispatch(changeCustomerProfileFormToPhoneNumber());
  }
  function handleAddressPress() {
    dispatch(changeCustomerProfileFormToAddress());
  }
  function handleMoreInformationPress() {
    dispatch(changeCustomerProfileFormToMoreInformation());
  }
  function handleServiceImagesPress() {
    dispatch(changeCustomerProfileFormToServiceImages());
  }
  console.log(userInformation);
  return (
    <div className={styles.ContactAndMoreContainer}>
      <div className={styles.ContactAndMoreTitle}>{titles.contactAndMore}</div>

      <div className={styles.ContactAndMoreContent}>
        <div className={styles.ImageNameServiceContainer}>
          <div className={styles.ContactAndMoreItemTitle}>
            {titles.phoneNumber}
          </div>
          <div className={styles.PhoneNumber}>
            {userInformation.phoneNumber || titles.NullPhoneNumber}
          </div>
        </div>
        <button
          className={styles.editItemButton}
          onClick={handlePhoneNumberPress}
        >
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.ContactAndMoreContent}>
        <div className={styles.ContactAndMoreItemTitle}>{titles.address}</div>
        <div className={styles.Address}>
          {userInformation.address || titles.NullAddress}
        </div>
        <button className={styles.editItemButton} onClick={handleAddressPress}>
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.ContactAndMoreContent}>
        <div className={styles.ContactAndMoreItemTitle}>{titles.moreInfo}</div>
        <div className={styles.MoreInfo}>
          {userInformation.moreInformation || titles.NullMoreInfo}
        </div>
        <button
          className={styles.editItemButton}
          onClick={handleMoreInformationPress}
        >
          {titles.editItemButton}
        </button>
      </div>

      <div className={styles.ContactAndMoreContent}>
        <div className={styles.ContactAndMoreItemTitle}>{titles.images}</div>
        <div>{userInformation.images.length > 0 || titles.NullImages}</div>
        <button
          className={styles.editItemButton}
          onClick={handleServiceImagesPress}
        >
          {titles.editItemButton}
        </button>
      </div>
    </div>
  );
}
export default ServiceContactAndMoreInfo;
