import * as React from "react"
import { Link, graphql } from "gatsby"

import Header from "../components/global/Header"
import Layout from "../components/Layout"
import Footer from "../components/global/Footer"

const NotFoundPage = ({ data }) => {
  const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  return (
    <div className="site-wrap">
      <Header logo={logo} />
      <Layout>
        <section className="not-found">
          <h2>Oops! Looks like this page doesn't exist yet!</h2>
          <button><Link className="btn" to="/">Take me Home</Link></button>
        </section>
      </Layout>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allWpMediaItem(filter: { filename: { eq: "logo.png" } }) {
      nodes {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 50)
          }
        }
      }
    }
  }
`;

export default NotFoundPage

export const Head = () => <title>Not found</title>
