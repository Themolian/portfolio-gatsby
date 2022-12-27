import * as React from "react";
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    <Link to="/">
                        <GatsbyImage image={props.logo} />
                    </Link>
                </div>
                <nav className="header-navigation">
                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header