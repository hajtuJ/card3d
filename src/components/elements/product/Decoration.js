import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import texturePath from './../../../helpers/texturePath'

const Decoration = (props) => {

    const floorTextures = [
        texturePath('gold/matcap/gold_flake'),
        texturePath('gold/preview-3LxCdL9GFrg-foil'),
        texturePath('gold/preview-3LxCdL9GFrg-height'),
        texturePath('gold/noise'),
        texturePath('envMap', 'jpg')
    ];

    const [matcapMap, alphaMap, bumpMap, noiseMap, envMap] = useLoader(THREE.TextureLoader, floorTextures);

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
                metalness={.8}
                roughnessMap={noiseMap}
                alphaMap={alphaMap}
                alphaTest={.1}
                bumpMap={bumpMap}
                bumpScale={.02}
            />
        </mesh>
    );
};

export default Decoration;
