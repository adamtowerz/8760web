import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <div className={styles.container}>
      <Head>
        <title>8760 App</title>
        <link rel="icon" href="https://8760app.com/favicon.ico" />
        <meta property="og:title" content="8760 App | Privacy" />
        <meta
          property="description"
          content="Make every hour count, built for iOS"
        />
        <meta property="og:site_name" content="8760 App" />
        <meta
          property="og:image"
          content="https://8760app.com/ogimage.png"
        ></meta>
        <meta property="og:author" content="Adam Towers" />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:site" content="@adamtowerz" />
        <meta property="twitter:creator" content="@adamtowerz" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>8760 Privacy Policy</h1>
        <h2>Debugging Data</h2>
        We use Apple’s opt-in service for crash reporting. Your device, version
        of iOS and the date of when the crash occurred will be viewable by us.
        However, no personally identifiable information is kept by us or sent
        externally. The only things we will see are what steps were taken before
        the crash occurred. We will not see any of the data you’ve entered such
        as your tags.
        <h2>Personal Data</h2>
        Nothing you enter in 8760 is ever viewable by us. For debugging
        purposes, we may ask you to provide this kind of information to
        troubleshoot an issue but that is with your explicit consent.
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
