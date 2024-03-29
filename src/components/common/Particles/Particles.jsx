import React from "react";
import Particles from "react-particles";
import './Particles.scss'


const ParticlesBackground = () => {
    return (
        <Particles
            canvasClassName={'particles '}
            height="100vh"
            width="100%"
            params={{
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 1000,
                        }
                    },
                },
            }}/>
    )
}

export default ParticlesBackground