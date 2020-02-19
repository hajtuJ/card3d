import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Controlls from './Controlls';
import Lights from './elements/scene/Lights';
import Effects from './Effects';
import { useGlobalState } from '../state/GlobalState';

const Composition = ({ children }) => {

    const [scene] = useGlobalState('scene');
    const [{init}] = useGlobalState('camera');
    
    return (
        <Canvas
            camera={{
                fov: 50,
                position: init.position
            }}
            shadowMap
            pixelRatio={2}
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
