import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

const ProjectsPage = ({ data }) => {
  const projects = data.allWpProject.nodes;
  const heading = data.wpNodeWithTemplate.template.projectsPage.heading;
  const subheading = data.wpNodeWithTemplate.template.projectsPage.subheading;
  return (
    <Layout>
      <div className="projects-header">
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </div>
      {projects.map((project) => (
        <article className="project-card">
          <div className="project-card__company">
            <img src={project.projects.companyLogo.sourceUrl} alt={project.projects.companyLogo.altText} />
          </div>
          <div className="project-card__image">
            <GatsbyImage image={project.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
          </div>
          <div className="project-card__logo">
            <img src={project.projects.clientLogo.sourceUrl} alt={project.projects.clientLogo.altText} />
          </div>
          <div className="project-card__overlay">
            <div className="project-card__text">
              <h3>{project.projects.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: project.projects.body }} />
            </div>
          </div>
        </article>
        
        // <article key={node.projects.title}>
        //   <h2>{node.projects.title}</h2>
        //   <div dangerouslySetInnerHTML={{ __html: node.projects.body }} />
        // </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    wpNodeWithTemplate(template: {templateName: {eq: "Projects"}}) {
      template {
        templateName
        ... on WpTemplate_Projects {
          projectsPage {
            heading
            subheading
          }
        }
      }
    }
    allWpProject {
      nodes {
        id
        projects {
          title
          body
          button {
            url
            title
          }
          clientLogo {
            sourceUrl
            altText
          }
          companyLogo {
            sourceUrl
            altText
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(width: 390, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;

export default ProjectsPage;

export const Head = () => <Seo title="Projects" />;
