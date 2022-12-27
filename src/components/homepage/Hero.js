import React from "react";

const Hero = (props) => {
  return (
    <section className="hero--homepage">
      <div className="hero-inner">
      <div
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <button><a class="btn btn--white" href={props.button.url}>{props.button.title}</a></button>
      </div>
    </section>
  );
};

export default Hero;
