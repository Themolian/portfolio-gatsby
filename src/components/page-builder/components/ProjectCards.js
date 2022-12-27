import React from "react";
import { GatsbyImage } from 'gatsby-plugin-image';

const ProjectCards = (props) => {
    const projects = props.dataSource.projects;
    return (
        <section className="project-cards">
            <div className="project-cards__inner">
                <h2>{props.dataSource.title}</h2>
                <div className="project-cards__cards">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-card__company">
                                <img src={project.projects.companyLogo.sourceUrl} alt={project.projects.companyLogo.altText} />
                            </div>
                            <div className="project-card__client">
                                <img src={project.projects.clientLogo.sourceUrl} alt={project.projects.clientLogo.altText} />
                            </div>
                            <GatsbyImage image={project.featuredImage.node.localFile.childImageSharp.gatsbyImageData} className="project-card__image" />
                            <div className="project-card__text">
                                <h3>{project.projects.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: project.projects.body}}></div>
                                <button className="button"><a href={project.projects.button.url} className="btn btn--white" target="__blank">{project.projects.button.title}</a></button>
                            </div>
                        </div>
                    ))}
                </div>
                <button><a href="/projects" className="btn">All Projects</a></button>
            </div>
        </section>
    )
};

export default ProjectCards;
