import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hiram Hibbard - Lead Front End Engineer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Lato:100,300,400,700" />
      </Head>

      <h1 className="title">Hiram Hibbard</h1>
      <h3><em>Lead Front End Engineer</em></h3>

      <p className="description">
        I'm a web application developer based in beautiful <Link href="https://traveloregon.com/places-to-go/cities/ashland/">Ashland, Oregon</Link>.<br />
        I work at an amazing company with amazing people, <Link href="https://wearehathway.com">HATHWAY</Link>.
      </p>
      <p>I've been building things for the web for over 15 years.<br />I make web apps by day and <em>dream in code</em> at night</p>
      <p>
        <Link href="/about/">Learn more about me...</Link><br />
        <Link href="/work/">Check out some of my work...</Link>
      </p>

    </Layout>
  )
}
