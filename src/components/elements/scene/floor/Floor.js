import React from 'react'
import * as THREE from 'three'
import { useGlobalState } from '../../../../state/GlobalState';

const Floor = () => {

    const [{floor}] = useGlobalState('textures');

    return (
        <mesh
            rotation={[THREE.MathUtils.degToRad(-90),0,0]}
            position={[0,0,0]}
            receiveShadow
        >
            <planeBufferGeometry 
                attach="geometry" 
                args={[1000, 1000]} 
            />
            <meshStandardMaterial 
                attach="material" 
                color={"#999999"}
                map={floor[1]}
                envMap={floor[0]}
            />
        </mesh>
    );
}

export default Floor;
