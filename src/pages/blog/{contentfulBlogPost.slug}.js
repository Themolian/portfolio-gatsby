import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
  }
}

const BlogPost = ({ data, children }) => {
  const blogPostContent = data.contentfulBlogPost.bodyRichText;
  return (
    <Layout pageTitle={data.contentfulBlogPost.title}>
      <p>{data.contentfulBlogPost.createdAt}</p>
      <div>{blogPostContent && renderRichText(blogPostContent, options)}</div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      slug
      title
      createdAt(formatString: "MMMM D, YYYY")
      bodyRichText {
        raw
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.contentfulBlogPost.title} />;

export default BlogPost;
