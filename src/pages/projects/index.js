import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const ProjectsPage = ({ data }) => {
    const projects = data.allContentfulProject;
  return (
    <Layout pageTitle="This is the title of the projects page">
      {projects.nodes.map((node) => (
        <article key={node.id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulProject {
      nodes {
        id
        title
        description {
          raw
        }
      }
    }
  }
`;

export default ProjectsPage;

export const Head = () => <Seo title="Projects" />;
