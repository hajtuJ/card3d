import React from 'react'
import * as THREE from 'three'
import { useGlobalState } from '../../../state/GlobalState';

const Paper = (props) => {
    
    const [{paper}] = useGlobalState('textures');

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
                map={paper[0]}
                color={`#ffffff`}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
};

export default Paper;
