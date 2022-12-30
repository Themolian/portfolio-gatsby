import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

const BlogPost = ({ data, children }) => {
  const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  return (
    <div className="site-wrap">
      <Header logo={logo} />
      <Layout>
        <article className="blog-content">
          <h2>{data.wpPost.title}</h2>
          <p className="date">{data.wpPost.date}</p>
          <div className="blog-content__body" dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
          <button><Link className="btn" to="/blog">Back to Blog</Link></button>
        </article>
      </Layout>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    allWpMediaItem(filter: { filename: { eq: "logo.png" } }) {
      nodes {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FIXED, height: 50)
          }
        }
      }
    }
    wpPost(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "MMMM D, YYYY")
      slug
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.wpPost.title} />;

export default BlogPost;
