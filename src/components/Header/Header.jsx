import React from "react";
import './Header.sass'
import {Animated} from "react-animated-css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin, faVk} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <Animated animationIn="fadeIn" isVisible={true}>
            <header className='header'>
                <div className="header-content">
                    <h1 className="header__title">
                        Antonov Igor
                    </h1>
                    <h2 className="header__subtitle">
                       Full Stack | Java developer | React developer
                    </h2>
                    <div className="header-social-links">
                        <a target='_blank' href="https://www.facebook.com/GagarinGara/" className="header-social__link">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/developpapa/" className="header-social__link">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a target='_blank' href="https://github.com/Snegurjan" className="header-social__link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </header>
        </Animated>
    )
}

export default Header;
