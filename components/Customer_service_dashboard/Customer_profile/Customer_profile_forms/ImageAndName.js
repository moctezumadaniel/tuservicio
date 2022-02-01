import styles from "../../../../styles/CustomerProfileForms.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeCustomerProfileFormToNone } from "../../../../redux/actions/CustomerProfileForms";
import { changeCustomerPublicInformationName } from "../../../../redux/actions/CustomerPublicInformation";
import axios from "axios";
import { useState } from "react";

function ImageAndName() {
  const customerInformation = useSelector(
    (state) => state.customerPublicInformation
  );
  const [temporalCustomerName, setTemporalCustomerName] = useState(
    customerInformation.name
  );
  const [temporalCustomerImage, setTemporalCustomerImage] = useState();
  const profileImage = "IMAGEN DE PERFIL";
  const changeImageButton = "Cambiar imágen";
  const serviceName = "Escribe el nombre de tu servicio";
  const confirmButton = "ACEPTAR";
  const dispatch = useDispatch();

  function changeTemporalCustomerName(event) {
    setTemporalCustomerName(event.target.value);
  }
  function changeTemporalCustomerImage(event) {
    if (event.target.files && event.target.files[0]) {
      setTemporalCustomerImage(URL.createObjectURL(event.target.files[0]));
    }
  }
  function updateCustomerName(customerId, newName) {
    axios
      .patch(`api/customer/updateCustomerName`, {
        customerId,
        newName,
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            changeCustomerPublicInformationName(temporalCustomerName),
            dispatch(changeCustomerProfileFormToNone())
          );
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleCloseForm() {
    dispatch(changeCustomerProfileFormToNone());
  }
  return (
    <div className={styles.MainContainer}>
      <div className={styles.ModalBackground} onClick={handleCloseForm}></div>
      <div className={styles.ModalContainer}>
        <div className={styles.ProfileImageFormContainer}>
          <img className={styles.ProfileImage} src={temporalCustomerImage} />
          <div className={styles.ProfileImageButtonContainer}>
            <label for="customerImage" className={styles.ProfileImageButton}>
              {changeImageButton}
              <input
                type="file"
                accept="image/*"
                name="customerImage"
                id="customerImage"
                className={styles.CustomerImageInput}
                onChange={(event) => changeTemporalCustomerImage(event)}
              />
            </label>
          </div>
        </div>

        <div className={styles.ProfileNameContainer}>
          <input
            type="text"
            className={styles.ProfileName}
            placeholder={serviceName}
            value={temporalCustomerName}
            onChange={(event) => changeTemporalCustomerName(event)}
          />
        </div>

        <div className={styles.ConformButtonContainer}>
          <button
            className={styles.ConfirmButton}
            onClick={() =>
              updateCustomerName(
                customerInformation.customerId,
                temporalCustomerName
              )
            }
          >
            {confirmButton}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ImageAndName;
