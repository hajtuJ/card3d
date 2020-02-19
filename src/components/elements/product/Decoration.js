import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import texturePath from './../../../helpers/texturePath'

const Decoration = (props) => {

    const floorTextures = [
        texturePath('gold/preview-3LxCdL9GFrg-foil'),
        texturePath('gold/preview-3LxCdL9GFrg-height'),
        texturePath('gold/noise'),
        texturePath('envMap', 'jpg')
    ];

    const textures = useLoader(THREE.TextureLoader, floorTextures);
    const [alphaMap, bumpMap, noiseMap, envMap] = textures;

    const colorMetalness = useMemo(() => new THREE.Color(`#6f5d40`), []);

    return (
        <mesh
            position={[0,0,.01]}
        >
            <planeBufferGeometry 
                attach="geometry" 
                args={[props.width, props.height]}
            />
            <meshStandardMaterial
                flatShading={false}
                attach="material"
                color={`#d6c68f`}
                emissive={colorMetalness}
                roughness={.2}
                metalness={.9}
                roughnessMap={noiseMap}
                alphaMap={alphaMap}
                alphaTest={.3}
                bumpMap={bumpMap}
                bumpScale={.01}
                envMap={envMap}
            />
        </mesh>
    );
};

export default Decoration;
