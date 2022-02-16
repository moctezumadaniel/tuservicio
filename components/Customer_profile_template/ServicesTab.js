import { useSelector } from "react-redux";
import styles from "../../styles/CustomerProfileTemplate.module.css";

import ServiceItemTemplate from "./ServiceItemTemplate";
function ServicesTab() {
  const pageInformation = useSelector((state) => state.customerInformation);

  return (
    <div className={styles.ServicesMainContainer}>
      {pageInformation.listOfServices &&
      pageInformation.listOfServices.length > 0
        ? pageInformation.listOfServices.map((service) => (
            <ServiceItemTemplate
              key={service._id}
              image={service.image}
              description={service.description}
              price={service.price}
              title={service.title}
            />
          ))
        : ""}
    </div>
  );
}
export default ServicesTab;
