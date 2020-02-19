import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber'
import Controlls from './Controlls';
import Lights from './elements/scene/Lights';
import Effects from './Effects';

const Composition = ({ children }) => {


    const SHADOWS = {
        shadowMapWidth: 512,
        shadowMapHeight: 512
    }

    const SceneConfig = {
        lights: {
            directional: {  
                position: [20, 50, 200],
                intensity: .4,
                color: '#ffffff'
            },
            spot: {
                intensity: .4,
                position: [5, 100, 50],
                castShadow: true,
                ...SHADOWS
            }

        }
    }

    return (
        <Canvas
            camera={{
                fov: 50,
                position: [-10, 20, 25]
            }}
            shadowMap
            updateDefaultCamera={true}
            pixelRatio={2}
            onCreated={({gl, camera}) => {
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <fog attach="fog" args={[0xffffff, 40, 80]} />
            <Lights {...SceneConfig.lights}/>
            <directionalLight intensity={1} color={`#ffffff`}/>
            <Controlls />
            { children }
            <Suspense fallback={null}>
                <Effects />
            </Suspense>
        </Canvas>
    );
}

export default Composition;
