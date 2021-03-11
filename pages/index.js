import {Provider} from 'react-redux';
import {createStore} from 'redux'
import rootReducer from '../redux/reducers'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainTabButtons from '../components/Main_tab_buttons'
import CustomerProfileTemplate from './Customer_profile_template'
import AppMainContainer from '../components/App_main_container';

const store = createStore (rootReducer)
export default function Home() {
  return (
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
  )
}
