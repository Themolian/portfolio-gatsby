import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from "../../components/Layout";
import Seo from "../../components/seo";

import Header from "../../components/global/Header";

const ProjectsPage = ({ data }) => {
  const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  const projects = data.allWpProject.nodes;
  const heading = data.wpNodeWithTemplate.template.projectsPage.heading;
  const subheading = data.wpNodeWithTemplate.template.projectsPage.subheading;

  return (
    <div className="site-wrap projects">
      <Header logo={logo} />
      <Layout>
        <div className="projects-header">
          <h2>{heading}</h2>
          <p>{subheading}</p>
        </div>
        <div className="project-cards">
          <div className="project-cards__inner">
            <div className="project-cards__cards">
              {projects.map((project) => (
                <article className="project-card">
                  <div className="project-card__company">
                    <img src={project.projects.companyLogo.sourceUrl} alt={project.projects.companyLogo.altText} />
                  </div>
                  <div className="project-card__image">
                    <GatsbyImage image={project.featuredImage.node.localFile.childImageSharp.gatsbyImageData} />
                  </div>
                  <div className="project-card__client">
                    <img src={project.projects.clientLogo.sourceUrl} alt={project.projects.clientLogo.altText} />
                  </div>
                  <div className="project-card__overlay">
                    <div className="project-card__text">
                      <h3>{project.projects.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: project.projects.body }} />
                      <button className="button"><a href={project.projects.button.url} className="btn btn--white" target="__blank">{project.projects.button.title}</a></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Layout>
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
