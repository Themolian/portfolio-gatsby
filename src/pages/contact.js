import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/seo";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

const ContactPage = ({ data }) => {
    const platformsTitle = data.wpPage.contactPage.platforms.title;
    const platforms = data.wpPage.contactPage.platforms.platformList;
    const logo =
    data.allWpMediaItem.nodes[0].localFile.childImageSharp.gatsbyImageData;
  return (
    <div className="site-wrap">
        <Header logo={logo} />
        <Layout>
            <div className="platforms">
                <h3>{platformsTitle}</h3>
                {platforms.map((platform) => (
                    <div className="platform">
                        <div className="platform__icon">
                            <img src={platform.icon.sourceUrl} alt={platform.icon.altText} />
                        </div>
                        <div className="platform__link">
                            <a href={platform.link.url}>{platform.link.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
        <Footer />
    </div>
  )
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
    wpPage(title: {eq: "Contact"}) {
        contactPage {
            platforms {
                title
                platformList {
                    title
                    icon {
                        altText
                        sourceUrl
                    }
                    link {
                        title
                        url
                    }
                }
            }
        }
    }
}
`;

export default ContactPage;

export const Head = () => <Seo title="Contact" />;
