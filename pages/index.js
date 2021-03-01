import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserServicesTab from './User_services_tab'
import MainTabButtons from './Main_tab_buttons'
export default function Home() {
  return (
    <div scroll="no" className={styles.container}>
      <Head>
        <title>Celer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserServicesTab/>
      <MainTabButtons/>
    </div>
  )
}
