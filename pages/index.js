import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from '../redux/reducers'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserServicesTab from './User_services_tab'
import MainTabButtons from './Main_tab_buttons'
import CustomerProfileTemplate from './Customer_profile_template'

const store = createStore (rootReducer)
export default function Home() {
  return (
    <Provider store={store}>
      <div scroll="no" className={styles.container}>
        <Head>
          <title>Celer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/*<CustomerProfileTemplate/>*/}
        <UserServicesTab/>
        <MainTabButtons/>
      </div>
    </Provider>
  )
}
