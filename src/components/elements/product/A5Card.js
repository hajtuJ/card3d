import React from 'react'
import * as THREE from 'three'
import Decoration from './Decoration'
import Paper from './Paper'

const A5Card = () => {

    const config = {
        width: 14.8,
        height: 21.0,
        textRepeat: 6,
        rotate: [THREE.MathUtils.degToRad(-20), THREE.MathUtils.degToRad(-5), 0]
    }

    return (
        <group
            rotation={config.rotate}
            position={[0, config.height/2 -.6, 0]}
            castShadow
            receiveShadow
        >
            <Paper {...config} />
            <Decoration {...config} />
        </group>
    );
}

export default A5Card;