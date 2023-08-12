import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import gavel from "../public/images/courtjester.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Shaming of Jay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>THE SHAMING OF JAY</h1>
        <Image
          className={styles.image}
          src={gavel}
          alt="Jay"
          width={500}
          height={500}
        />
        <p className={styles.description}>
          Just another asshole. I watch live true crime trials and sprinkle my
          rants to my Bo's on the daily.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>JBN Merch &rarr;</h3>
            <p>
              Check out our current collection of awesome merch! We have shirts,
              mugs, hats, stickers, and much much more!
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Stream Schedule &rarr;</h3>
            <p>Find out when we'll be live on YouTube and on Patreon</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Tip Your Streamer &rarr;</h3>
            <p>
              Keep JayBoNation thriving by supporting your favorite American
              Court DJ! Most major payment apps are accepted. Thank you for your
              love and support!
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Check our socials &rarr;</h3>
            <p>
              Find Jay anywhere on the web! @theshamingofjay on all platforms.
              Go follow if you aren't already! We are having contests regularly.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Honourable Members of JayBoNation &rarr;</h3>
            <p>
              We've made a lot of amazing friends on this journey. Here is more
              information on our favorite guests, our Partners In Crime, and
              some fellow content creators we work closely with.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Current Contests &rarr;</h3>
            <p>
              We're always coming up with great ways to give away our awesome
              merch, so check here regularly to find out what's up for grabs and
              how to enter.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://www.jenluchka.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proudly coded with ♥︎ by Jen from{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #ff3131;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
