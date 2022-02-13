import styles from "../../styles/CustomerProfileTemplate.module.css";

function ServiceItemTemplate(props) {
  const image = props.image || "";
  {
    /*imagen del servicio en caso de que no se establezca una para el servicio */
  }
  const price = props.price || "";
  const title = props.title || "";
  const description = props.description || "";
  return (
    <div className={styles.ServiceItemContainer}>
      <div className={styles.ServiceMainInfo}>
        <image>{image}</image>
        <div>{price}</div>
      </div>
      <div className={styles.ServiceComplementInfo}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default ServiceItemTemplate;
