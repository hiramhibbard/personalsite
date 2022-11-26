import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Work() {
  return (
    <Layout>
      <h1>Work</h1>
      <ul>
        <li><a href="https://www.allure.com/story/color-co-loreal-custom-hair-color-review">L'Oréal Color and Co.</a></li>
        <p>Award-winning personalized hair coloring app. I built this using React, GraphQL and nodejs.</p>

        <li>Los Angeles Metro by Red Bull</li>
        <p>An interactive map of the Los Angeles metro, highlighting art centers, historic venues, famous restaurants, etc. Built in React.</p>

        <li><a href="https://www.redbull.com/us-en/spike-lee-interactive-map-of-his-best-nyc-scenes">Spike Lee & Red Bull</a></li>
        <p>I built an interactive map of Spike Lee's New York filming locations for a collaboration between Spike Lee and Red Bull.</p>

        <li><a href="https://www.foryourparty.com/">For Your Party</a></li>
        <p>I built a complex graphics design/customization web app using React.</p>

        <li><a href="https://www.olo.com/">Olo</a> hospitality SaaS</li>
        <p>I built the marketing website using Harpjs.</p>

        <li><a href="https://www.coffeebeanrewards.com/">Coffee Bean & Tea Leaf Rewards</a></li>
        <p>I built the web portion of the rewards experience using Laravel.</p>

        <li><a href="https://www.bostonmarket.com/">Boston Market</a></li>
        <p>I Implemented the redesign of the Wordpress marketing site.</p>

        <li><a href="https://www.chandon.com/">Chandon</a> Sparkling Wine</li>
        <p>Creation of marketing portals for their Wordpress site, integrated with thier online store. Frontend updates to the online store.</p>

        <li><a href="https://kcmasterpiece.com/">KC Masterpiece</a> BBQ Sauce</li>
        <p>I built the redesign of kcmasterpiece.com on Wordpress.</p>

        <li><a href="https://liquidplumr.com/">Liquid Plumr</a></li>
        <p>I led a small team of developers to build the updated liquidplumr.com website on WordPress.</p>

        <li><a href="https://www.facebook.com/DETROITREDWINGS/photos/a.132942909138.107697.16313679138/10151093851934139/?type=1&theater">Amway/Red Wings</a> facebook app</li>
        <p>I was part of a team who built a Facebook app that allowed a user to upload a photo of themselves which was later used to create a mosaic mural.</p>

        <li><a href="https://dita.com">Dita Eyeware</a></li>
        <p>I built the ecommerce website for fthe luxury eyeware brand Dita on Magento.</p>

        <li>Applied Materials Heritage Hall touchscreen kiosk</li>
        <p>I built an 8 - screen permanent installation featuring the history of Applied Materials (a fortune-500 silicon chip manufacturing company) using large touchscreens, with JavaScript and HTML to render a draggable timeline which enabled the selection of different videos related to locations on the timeline.</p>

        <li><a href="https://www.minkagroup.net">Minka Group</a></li>
        <p>Built on Drupal, a comparison site of Minka's wide range of products. I was part of a small team and was responsible for the front end architecture and code.</p>

        <li><a href="https://straightdown.com/">Straight Down</a> golf apparel</li>
        <p>Webstore built on Magento.</p>
      </ul>
    </Layout>
  )
}