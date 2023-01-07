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

const currentAge = function (dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

if (document.querySelector("#age")) {
  document.querySelector("#age").innerHTML = currentAge("1995-03-29");
}

export default TextImage;
