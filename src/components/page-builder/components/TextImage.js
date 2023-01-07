import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const TextImage = (props) => {
  const sectionImage =
    props.dataSource.image.localFile.childImageSharp.gatsbyImageData;
  return (
    <section className="text-image">
      <div className="text-image__inner">
        <h2>{props.dataSource.title}</h2>
        <div className="text-image__content">
          <div className="text-image__text">
            <div dangerouslySetInnerHTML={{ __html: props.dataSource.body }} />
          </div>
          <GatsbyImage
            className="text-image__image"
            image={sectionImage}
            alt={props.dataSource.image.title}
          />
        </div>
      </div>
    </section>
  );
};

export default TextImage;
