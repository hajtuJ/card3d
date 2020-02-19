import React from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber'
import Controlls from './Controlls';
import Lights from './elements/scene/Lights';

const Composition = ({ children }) => {


    const GlobalConfig = {
        shadow: {
            mapSize: {
                width: 2048,
                height: 2048
            }
        }
    }
    const SceneConfig = {
        lights: {
            directional: {  
                position: [20, 50, 200],
                intensity: .6,
                color: '#ffffff',
                // castShadow: true
            },
            spot: {
                intensity: .5,
                position: [5, 100, 50],
                // angle: 1,
                // penumbra: 1,
                castShadow: true,
                // shadow: GlobalConfig.shadow
            }

        }
    }

    return (
        <Canvas
            camera={{
                fov: 50,
                position: [10, 10, 20]
            }}
            shadowMap
            pixelRatio={2}
            onCreated={({gl}) => {
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
        >
            <fog attach="fog" args={[0xffffff, 40, 80]} />
            <Lights {...SceneConfig.lights}/>
            <directionalLight intensity={1} color={`#ffffff`}/>
            <Controlls />
            { children }
        </Canvas>
    );
}

export default Composition;
