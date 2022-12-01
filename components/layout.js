import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export const siteTitle = 'Hir.am';

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta name="og:title" content={siteTitle} />
        </Head>

        <Link href="/">
          <Image
            src="/images/logo.png"
            width="158"
            height="160"
            alt="hir.am"
            className={styles.logo}
          />
        </Link>

        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← back to home</Link> | <Link href="mailto:hiramhibbard@gmail.com">say hi!</Link>
          </div>
        )}
      </div>
      <div id="modal" />
    </>
  );
}