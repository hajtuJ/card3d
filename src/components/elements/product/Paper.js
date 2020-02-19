import React from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import texturePath from './../../../helpers/texturePath'

const Paper = (props) => {

    const floorTextures = [
        texturePath('a5card/preview-3LxCdL9GFrg-cmyk')
    ];

    const [map] = useLoader(THREE.TextureLoader, floorTextures);

    return (
        <mesh
            castShadow 
            position={[0, 0, 0]}
        >
            <boxBufferGeometry 
                attach="geometry" 
                args={[props.width, props.height, .01]}
            />
            <meshStandardMaterial
                attach="material"
                map={map}
                color={`#f5f6ef`}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

export default Paper;
