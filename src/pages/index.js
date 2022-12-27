import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

import "../styles/styles.scss";

import Header from "../components/global/Header";
import Hero from "../components/homepage/Hero";
import PageBuilder from "../components/page-builder/PageBuilder";

const HomePage = ({ data }) => {
  const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  const heroImage =
    data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData;
  const heroTitle = data.wpPage.homepageSettings.heroTitle;
  const heroButton = data.wpPage.homepageSettings.heroButton;
  const pageBuilder = data.wpPage.pageBuilder.pageBuilder;
  return (
    <div className="site-wrap">
      <div className="top-content">
        <GatsbyImage class="hero-image" image={heroImage} role="presentation" />
        <Header logo={logo} />
        <Hero title={heroTitle} button={heroButton} />
      </div>
      <Layout>
        <PageBuilder dataSource={pageBuilder} />
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
    wpPage(title: { eq: "Home" }) {
      id
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
      homepageSettings {
        heroTitle
        heroButton {
          title
          url
        }
      }
      pageBuilder {
        pageBuilder {
          ... on WpPage_Pagebuilder_PageBuilder_TextImage {
            fieldGroupName
            title
            body
            imageOrientation
            image {
              title
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 500)
                }
              }
            }
          }
          ... on WpPage_Pagebuilder_PageBuilder_ShowcaseCards {
            fieldGroupName
            title
            cards {
              title
              body
              icon {
                altText
                sourceUrl
              }
            }
          }
          ... on WpPage_Pagebuilder_PageBuilder_ProjectCards {
            fieldGroupName
            title
            projects {
              ... on WpProject {
                id
                title
                link
                projects {
                  title
                  body
                  button {
                    title
                    url
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
        }
      }
    }
  }
`;

export default HomePage;

export const Head = () => <Seo title="Home" />;
