import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainTabButtons from "../components/Main_tab_buttons";
import CustomerProfileTemplate from "./Customer_profile_template";
import AppMainContainer from "../components/App_main_container";
import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(rootReducer);
export default function Home() {
  return (
    <Auth0Provider
      domain="dev-006imb0h.us.auth0.com"
      clientId="g6P2mkVcDFDJpEy1L8pguWxkDOUHuqiK"
      redirectUri="http://localhost:3000/"
    >
      <Provider store={store}>
        <div scroll="no" className={styles.container}>
          <Head>
            <title>TuServicio</title>
            <link rel="icon" href="/celer.png" />
          </Head>
          {/*<CustomerProfileTemplate/>*/}
          <AppMainContainer />
          <MainTabButtons />
        </div>
      </Provider>
    </Auth0Provider>
  );
}
