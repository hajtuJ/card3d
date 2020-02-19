import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber'
import Controlls from './Controlls';
import Lights from './elements/scene/Lights';
import Effects from './Effects';
import { useGlobalState } from '../state/GlobalState';

const Composition = ({ children }) => {


    const shadows = {
        shadowMapWidth: 512,
        shadowMapHeight: 512
    }

    const scene = {
        lights: {
            directional: {  
                position: [20, 50, 200],
                intensity: .3,
                color: '#ffffff'
            },
            spot: {
                intensity: .3,
                position: [5, 100, 50],
                castShadow: true,
                ...shadows
            }

        }
    }

    const [camera] = useGlobalState('camera');

    return (
        <Canvas
            camera={{
                fov: 50
            }}
            updateDefaultCamera
            shadowMap
            pixelRatio={2}
            onCreated={({camera}) => {
                camera.position.set( camera.initPosition );
            }}
        >
            <fog attach="fog" args={[0xffffff, 40, 80]} />
            <Lights {...scene.lights}/>
            <Controlls />
            { children }
            <Suspense fallback={null}>
                <Effects />
            </Suspense>
        </Canvas>
    );
}

export default Composition;
