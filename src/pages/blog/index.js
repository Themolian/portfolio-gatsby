import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/global/Hero";
import Seo from "../../components/seo";

import Header from "../../components/global/Header";
import Footer from "../../components/global/Footer";

const BlogPage = ({ data }) => {
  const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  const heroTitle = data.wpPage.heroSettings.title;
  const heroSubtitle = data.wpPage.heroSettings.subtitle;
  const heroImage = data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  return (
    <div className="site-wrap">
      <Header logo={logo} />
      <Hero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
      <Layout>
        <div className="blog-posts">
        {data.allWpPost.nodes.map((node) => (
          <article className="blog-post" key={node.id}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <p className="date">{node.date}</p>
            <div className="excerpt" dangerouslySetInnerHTML={{__html: node.excerpt}} />
            <button><Link className="btn" to={node.slug}>Read More</Link></button>
          </article>
        ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

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
    wpPage(isPostsPage: {eq: true}) {
      isPostsPage
      heroSettings {
        title
        subtitle
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
    allWpPost {
      nodes {
        id
        slug
        title
        excerpt
        date(formatString: "MMMM D, YYYY")
        content
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <Seo title="Blog" />;
