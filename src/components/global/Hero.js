import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Hero = (props) => {
    return (
        <section className="hero">
            <div className="hero-inner">
                <h1>{props.title}</h1>
                <h3 className="subtitle">{props.subtitle}</h3>
            </div>
            <div className="hero-image">
                <GatsbyImage image={props.image} />
            </div>
        </section>
    )
}

export default Hero