import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="This is the title of the blog page">
      {data.allContentfulBlogPost.nodes.map((node) => (
        <article key={node.id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <p>Posted: {node.createdAt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        id
        slug
        title
        createdAt(formatString: "MMMM D, YYYY")
        bodyRichText {
          raw
        }
      }
    }
  }
`;

export default BlogPage;

export const Head = () => <Seo title="Blog" />;
