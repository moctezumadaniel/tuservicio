import Head from 'next/head'
import styles from '../styles/Home.module.css'
import UserServicesTab from './User_services_tab'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Celer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserServicesTab/>
    </div>
  )
}
