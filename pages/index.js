import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserServicesMenuButtons from './User_services_tab/User_services_menu_buttons'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Celer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserServicesMenuButtons/>
    </div>
  )
}
