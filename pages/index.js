import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import AppMainContainer from "../components/App_main_container";
import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(rootReducer);

export default function Home() {
  console.log(globalThis.location);
  return (
    <Auth0Provider
      domain="dev-006imb0h.us.auth0.com"
      clientId="g6P2mkVcDFDJpEy1L8pguWxkDOUHuqiK"
      redirectUri={globalThis.location ? globalThis.location.href : ""}
    >
      <Provider store={store}>
        <div scroll="no" className={styles.container}>
          <Head>
            <title>TuServicio</title>
            <link rel="icon" href="/celer.png" />
          </Head>
          <AppMainContainer />
        </div>
      </Provider>
    </Auth0Provider>
  );
}
