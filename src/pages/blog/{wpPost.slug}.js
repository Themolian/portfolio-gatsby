import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.wpPost.title}>
      <p>{data.wpPost.date}</p>
      <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      date(formatString: "MMMM D, YYYY")
      slug
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.allWpPost.title} />;

export default BlogPost;
