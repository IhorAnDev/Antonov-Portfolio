import React from "react";
import {faHandPointer} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const WorksCard = (props) => {
    debugger;
    return (
        <NavLink to={`/works/${props.path}`} className='works-card'
             style={{backgroundImage: `url(https://ihorandev.github.io/Antonov-Portfolio/works/${props.img})`}}>
            <div className="works-card__mask">
                <div>
                    <h4 className="works-card__mask__title">{props.name}</h4>
                    <FontAwesomeIcon icon={faHandPointer} />
                    <h5>Нажми!</h5>
                </div>
            </div>
        </NavLink>
    )
}

export default WorksCard
