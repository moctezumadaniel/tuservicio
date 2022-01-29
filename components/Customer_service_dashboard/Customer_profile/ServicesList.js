import styles from "../../../styles/CustomerServiceDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCustomerProfileFormToAddService,
  changeCustomerProfileFormToEditService,
} from "../../../redux/actions/CustomerProfileForms";
import axios from "axios";
import { addServiceToCustomerPublicInformation } from "../../../redux/actions/CustomerPublicInformation";
import { loadCustomerEditingService } from "../../../redux/actions/CustomerEditingService";
function ListOfServices() {
  const customerInformation = useSelector(
    (state) => state.customerPublicInformation
  );
  const customerPublicServices = useSelector(
    (state) => state.customerPublicInformation.listOfServices
  );
  const dispatch = useDispatch();
  const deleteButton = "ELIMINAR";
  const editButton = "EDITAR";
  function editService(service) {
    dispatch(
      loadCustomerEditingService(service),
      dispatch(changeCustomerProfileFormToEditService())
    );
  }
  function updateCustomerListOfServices(customerId, id) {
    axios
      .delete(`api/customer/deleteCustomerService`, {
        params: {
          customerId,
          id,
        },
      })
      .then((response) => {
        if (response.data) {
          dispatch(
            addServiceToCustomerPublicInformation(response.data.listOfServices)
          );
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.ServicesMainContainer}>
      {/*SERICE ITEM */}
      {customerPublicServices
        ? customerPublicServices.map((service) => (
            <div className={styles.ServiceItemContainer} key={service._id}>
              <div className={styles.ServiceMainInfo}>
                <image>{service.image}</image>
                <div>{service.price}</div>
              </div>
              <div className={styles.ServiceComplementInfo}>
                <div className={styles.ServiceTitle}>{service.title}</div>
                <div>{service.description}</div>
              </div>
              <div className={styles.ServiceButtonsContainer}>
                <button
                  className={styles.EditServiceButton}
                  onClick={() => editService(service)}
                >
                  {editButton}
                </button>
                <button
                  className={styles.DeleteServiceButton}
                  onClick={() =>
                    updateCustomerListOfServices(
                      customerInformation.customerId,
                      service._id
                    )
                  }
                >
                  {deleteButton}
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
function ServicesList() {
  const dispatch = useDispatch();
  const servicesTitle = "Servicios";
  const addServiceButton = "AÑADIR SERVICIO";

  function handleAddServicePress() {
    dispatch(changeCustomerProfileFormToAddService());
  }
  return (
    <div className={styles.ListOfServicesContainer}>
      {/*TITLE AND ADD BUTTON */}
      <div className={styles.ServicesTitle}>{servicesTitle}</div>
      <button
        className={styles.AddServiceButton}
        onClick={handleAddServicePress}
      >
        {addServiceButton}
      </button>
      <ListOfServices />
    </div>
  );
}

export default ServicesList;
