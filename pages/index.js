import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>8760 App</title>
        <link rel="icon" href="/Icon.svg" />
        <meta property="og:title" content="8760 App" />
        <meta
          property="description"
          content="Make every hour count, built for iOS"
        />
        <meta property="og:site_name" content="8760 App" />
        <meta property="og:author" content="Adam Towers" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:site" content="@adamtowerz" />
        <meta property="twitter:creator" content="@adamtowerz" />
      </Head>

      <main className={styles.main}>
        <img src="/Icon.svg" className={styles.logo} />
        <h1 className={styles.title}>8760</h1>
      </main>

      <footer className={styles.footer}>
        Built by keyboard by{" "}
        <a
          href="https://twitter.com/adamtowerz"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Adam Towers
        </a>
      </footer>
    </div>
  );
}
