import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Hero from "../../components/global/Hero";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  const heroTitle = data.wpPage.heroSettings.title;
  const heroSubtitle = data.wpPage.heroSettings.subtitle;
  const heroImage = data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  return (
    <Layout>
      <Hero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />
      <h1>{data.wpPage.isPostsPage}</h1>
      {data.allWpPost.nodes.map((node) => (
        <article key={node.id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <p>Posted: {node.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    wpPage(isPostsPage: {eq: true}) {
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
