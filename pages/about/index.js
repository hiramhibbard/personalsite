import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function About() {
  return (
    <Layout>
      
      <h1>About me</h1>
      <h3>I'm the Lead Front End Engineer at <Link href="https://wearehathway.com">Hathway</Link>.</h3>
      <p>I'm an experienced front end developer with many years in the web development field. I'm obsessed with efficiency, usability, promoting best practices, and building for performance. I'm a very passionate problem-solver at heart. I'm a self-starter that is known at my company for being great at earning a client's trust, affording me much autonomy and ability to interact directly with clients and manage the development side of my projects.</p>

      <h3>Clients</h3>
      <p>I've worked with many brands, from Fortune 500s to local businesses. Some of my favorite clients include L'Oréal, Red Bull, Clorox, TransUnion, Transamerica, Brita, Liquid Plumr, KC Masterpiece, Behr Paint, Titleist, and Amway to name a few.</p>

      <p>I've been employed at Hathway for the past 12+ years, and write and update our internal engineering guidelines and mentor the team on best practices and modern techniques. I was an early adopter and evangelist for React at Hathway. I also authored and maintain our internal starter theme (including SCSS/JavaScript/HTML and build tools) for starting new web projects.</p>

      <p>I have a highly trained eye for design and user interaction. I'm also great at identifying and mitigating risk early, helping to communicate technical issues, problems, and solutions to stakeholders, and interpreting and solving for a client's needs. I'm a very experienced front end engineer, with skills in React, GraphQL, TypeScript, JavaScript, CSS/SCSS, PHP, HTML, WordPress, Laravel, Git, MySQL, Unix CLI, and responsive and cross-browser techniques.</p>

      <h2>Work History</h2>
      <h3>Hathway</h3>
      <p><em>Lead Front End Engineer</em><br />
      I work with a wide variety of clients to rapidly architect and build complex and responsive web apps. I mentor junior developers and maintain our internal coding guidelines and promote best practices.
      <br />
      <em>Oct 2009 — present</em>
      </p>

      <h3>Web Editors</h3>
      <p><em>Web Designer</em><br />
      Designed and built websites for small to medium businesses.<br />
      <em>Jan 2008 — Jan 2009</em>
      </p>

      <h3>Diamond Valley Web Design</h3>
      <p><em>Web Designer</em><br />
      Designed and built websites for local businesses.<br />
      <em>Jan 2005 — Jan 2008</em>
      </p>


    </Layout>
  )
}