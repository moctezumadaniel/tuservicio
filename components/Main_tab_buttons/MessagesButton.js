import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/MainTabButtons.module.css";
import { changeGlobalToMessages } from "../../redux/actions/GlobalTab";
import { changeMessagesTabToList } from "../../redux/actions/UserMessagesTab";

const MessagesButton = () => {
  const currentTab = useSelector((state) => state.globalTab);

  const messagesStatus = useSelector((state) => state.userMessagesTab);

  const dispatch = useDispatch();
  function handleMessagesPress() {
    dispatch(changeGlobalToMessages());
  }
  function handleCloseChatPress() {
    dispatch(changeMessagesTabToList());
  }
  const closeDescription = "< SALIR";

  return (
    <>
      {messagesStatus === "Chat" && currentTab === "Messages" ? (
        <button className={styles.MainCloseChat} onClick={handleCloseChatPress}>
          {closeDescription}
        </button>
      ) : (
        <button
          className={
            currentTab === "Messages"
              ? styles.MainTabButtonActive
              : styles.MainTabButton
          }
          onClick={handleMessagesPress}
        >
          Mensajes
        </button>
      )}
    </>
  );
};

export default MessagesButton;
