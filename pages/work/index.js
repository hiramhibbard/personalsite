import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '../../components/layout';
import styles from './work.module.css'
import Modal from '../../components/portal/Modal';

const work = [
  {
    id: 'cc',
    title: `L'Oréal Color and Co.`,
    content: <><a href="https://www.allure.com/story/color-co-loreal-custom-hair-color-review">L'Oréal Color and Co.</a><p>Award-winning personalized hair coloring app. I built this using React, GraphQL and nodejs.</p></>
  },
  {
    id: 'la-redbull',
    title: `L.A. Metro by Red Bull`,
    content: <><p>An interactive map of the Los Angeles metro, highlighting art centers, historic venues, famous restaurants, etc. Built in React.</p></>
  },
  {
    id: 'spike-lee',
    title: `Spike Lee & Red Bull`,
    content: <><a href="https://www.redbull.com/us-en/spike-lee-interactive-map-of-his-best-nyc-scenes">Spike Lee & Red Bull</a>
    <p>I built an interactive map of Spike Lee's New York filming locations for a collaboration between Spike Lee and Red Bull.</p></>
  },
  {
    id: 'fyp',
    title: `For Your Party`,
    content: <><a href="https://www.foryourparty.com/">For Your Party</a>
    <p>I built a complex graphics design/customization web app using React.</p></>
  },
  {
    id: 'olo',
    title: `Olo`,
    content: <><a href="https://www.olo.com/">Olo</a> hospitality SaaS
    <p>I built the marketing website using Harpjs.</p></>
  },
  {
    id: 'coffeebean',
    title: `Coffee Bean & Tea Leaf Rewards`,
    content: <><a href="https://www.coffeebeanrewards.com/">Coffee Bean & Tea Leaf Rewards</a>
    <p>I built the web portion of the rewards experience using Laravel.</p></>
  },
  {
    id: 'boston',
    title: `Boston Market`,
    content: <><a href="https://www.bostonmarket.com/">Boston Market</a>
    <p>I Implemented the redesign of the Wordpress marketing site.</p></>
  },
  {
    id: 'chandon',
    title: `Chandon`,
    content: <><a href="https://www.chandon.com/">Chandon</a> Sparkling Wine
    <p>Creation of marketing portals for their Wordpress site, integrated with thier online store. Frontend updates to the online store.</p></>
  },
  {
    id: 'kc',
    title: `KC Masterpiece`,
    content: <><a href="https://kcmasterpiece.com/">KC Masterpiece</a> BBQ Sauce
    <p>I built the redesign of kcmasterpiece.com on Wordpress.</p></>
  },
  {
    id: 'liquidplumr',
    title: `Liquid Plumr`,
    content: <><a href="https://liquidplumr.com/">Liquid Plumr</a>
    <p>I led a small team of developers to build the updated liquidplumr.com website on WordPress.</p></>
  },
  {
    id: 'amway',
    title: `Amway/Red Wings`,
    content: <><a href="https://www.facebook.com/DETROITREDWINGS/photos/a.132942909138.107697.16313679138/10151093851934139/?type=1&theater">Amway/Red Wings</a> facebook app
    <p>I was part of a team who built a Facebook app that allowed a user to upload a photo of themselves which was later used to create a mosaic mural.</p></>
  },
  {
    id: 'dita',
    title: `Dita Eyewear`,
    content: <><a href="https://dita.com">Dita Eyeware</a>
    <p>I built the ecommerce website for the luxury eyeware brand Dita on Magento.</p></>
  },
  {
    id: 'amat',
    title: `Applied Materials Heritage Hall`,
    content: <>Applied Materials Heritage Hall touchscreen kiosk
    <p>I built an 8 - screen permanent installation featuring the history of Applied Materials (a fortune-500 silicon chip manufacturing company) using large touchscreens, with JavaScript and HTML to render a draggable timeline which enabled the selection of different videos related to locations on the timeline.</p></>
  },
  {
    id: 'minka',
    title: `Minka Group`,
    content: <><a href="https://www.minkagroup.net">Minka Group</a>
    <p>Built on Drupal, a comparison site of Minka's wide range of products. I was part of a small team and was responsible for the front end architecture and code.</p></>
  },
  {
    id: 'sd',
    title: `Straight Down`,
    content: <><a href="https://straightdown.com/">Straight Down</a> golf apparel
    <p>Webstore built on Magento.</p></>
  },
]

export default function Work() {
  const [project, selectProject] = useState(null);

  const handleTogglePortal = () => {
    selectProject(null);
  }

  const workList = work.map(item => {
    return (
      <li
        className={styles[item.id]}
        key={item.id}
        onClick={() => selectProject(item)}
      >
        <div className={styles.workTitle}>{item.title}</div>
      </li>
    )
  });

  return (
    <Layout>
      <h1>Recent Projects</h1>
      <ul className={styles.workList}>{workList}</ul>

      {project &&
        <Modal
          toggleModal={handleTogglePortal}
        >
          <h2>{project?.title}</h2>
          {project?.content}
        </Modal>
      }
    </Layout>
  )
}