import styles from "./LoadingScreen.module.css";

export default function LoadingScreen() {
  const loadingMessage = "Cargando...";
  return <div className={styles.LoadingMessage}>{loadingMessage}</div>;
}
