import React from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber';
import texturePath from '../../../../helpers/texturePath';

const Floor = () => {

    const texturesToLoad = [
        texturePath('envMap', 'jpg'),
        texturePath('floor/concrete')
    ];

    const [envMap, map] = useLoader(THREE.TextureLoader, texturesToLoad);

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
                map={map}
                envMap={envMap}
            />
        </mesh>
    );
}

export default Floor;
