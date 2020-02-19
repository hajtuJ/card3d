import React from 'react'

const Lights = (props) => {

    const spotPos = props.spot.position[0];
    const reverseSpotPosition = [-spotPos[0], spotPos[1], spotPos[2]];

    return (
        <>
            <directionalLight  {...props.directional} />
            <spotLight {...props.spot} />
            <spotLight {...props.spot} position={reverseSpotPosition} />
            <directionalLight intensity={1} color={`#ffffff`}/>
        </>
    )
}
 
export default Lights
