import * as React from "react"
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="This is the page title">
        <p className="typical-text">This is some child text</p>
        <StaticImage 
        src="https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Image of mountains with the Northern Lights dancing above" />
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home" />
