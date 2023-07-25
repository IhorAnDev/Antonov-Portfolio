import React from "react";
import './Footer.sass'
import {faLinkedin, faGithub, faBitbucket} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <footer className='footer'>
            <p className="footer-copyright">
                © {new Date().getFullYear()} Antonov Igor
            </p>
            <div className="footer-social-links">
                <a target='_blank' href="https://bitbucket.org/DevelopPapa/workspace/projects/"
                   className="footer-social__link">
                    <FontAwesomeIcon icon={faBitbucket}/>
                </a>
                <a target='_blank' href="https://www.linkedin.com/in/developpapa/" className="footer-social__link">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
                <a target='_blank' href="https://github.com/ihorAndev" className="footer-social__link">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </div>
        </footer>
    )
}

export default Footer
