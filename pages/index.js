import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image';
import NextImage from '../components/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <NextImage 
          src="/images/test.png"
          width={100}
          height={100}
        />

        <button onClick={() => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log(position);
              },
              (error) => {
                console.error("Error Code = " + error.code + " - " + error.message);
              }
            );
        
          }
        }}>click me!</button>
      </main>
    </div>
  )
}
