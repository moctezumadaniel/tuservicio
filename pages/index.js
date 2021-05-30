import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from '../redux/reducers'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainTabButtons from '../components/Main_tab_buttons'
import CustomerProfileTemplate from './Customer_profile_template'
import AppMainContainer from '../components/App_main_container';
import {Auth0Provider} from '@auth0/auth0-react'

const store = createStore (rootReducer)
export default function Home() {
  return (
    <Auth0Provider
    domain="danielmoctezuma.us.auth0.com"
    clientId="lIyLMie9a90fQfzV7kbLpt3xeR5HqbMo"
    redirectUri={"http://localhost:3000"||"https://celer.vercel.app"}
    audience="https://danielmoctezuma.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata">
      <Provider store={store}>
        <div scroll="no" className={styles.container}>
          <Head>
            <title>Celer</title>
            <link rel="icon" href="/celer.png" />
          </Head>
          {/*<CustomerProfileTemplate/>*/}
          <AppMainContainer/>
          <MainTabButtons/>
        </div>
      </Provider>
    </Auth0Provider>
  )
}
