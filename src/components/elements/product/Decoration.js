import React, { useMemo } from 'react'
import * as THREE from 'three'
import { useGlobalState } from '../../../state/GlobalState';

const Decoration = (props) => {

    const [{decor: decorT}] = useGlobalState('textures');
    const [decor] = useGlobalState('decor');

    const [color, metalnessColor] = useMemo(() => ([
        new THREE.Color(decor.color),
        new THREE.Color(decor.metalnessColor),
    ]), [decor]);

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
                color={color}
                emissive={metalnessColor}
                metalness={.9}
                roughness={.2}
                roughnessMap={decorT[0]}
                alphaMap={decorT[1]}
                alphaTest={.3}
                bumpMap={decorT[2]}
                bumpScale={.01}
                envMap={decorT[3]}
            />
        </mesh>
    );
};

export default Decoration;
