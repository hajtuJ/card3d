import React, { useRef, useCallback, useState } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MathUtils } from 'three';
import { useGlobalState } from './../state/GlobalState'

extend({ OrbitControls });

const Controlls = () => {

    const [touchingProduct] = useGlobalState('touchingProduct');
    const [{init: initCamera}] = useGlobalState('camera');

    const { camera, gl } = useThree();
    const orbitRef = useRef(null);

    const [pos, setPos] = useState(10);
    let speed = .004,
    centerX = 0,
    posToAnime = 10;

    //counting camera position while moving === not touching product
    const countCameraPos = useCallback(() => {
            const newPosition = pos + speed;
            setPos(newPosition);
            return centerX + (Math.sin(newPosition) * posToAnime);
        },
    [posToAnime, centerX, pos, speed]);

    useFrame(() => {
        if (orbitRef && orbitRef.current) {
            orbitRef.current.update();
            camera.lookAt(initCamera.lookAt);
        }
        if (!touchingProduct) {
            camera.position.x = countCameraPos();
        }
    });

    return (
        <orbitControls
            ref={orbitRef}
            args={[camera, gl.domElement]}
            enabled={touchingProduct}
            enableZoom={true}
            maxDistance={45}
            minDistance={30}
            enablePan={false}
            enableKeys={false}
            maxAzimuthAngle={MathUtils.degToRad(17)}
            minAzimuthAngle={MathUtils.degToRad(-17)}
            minPolarAngle={MathUtils.degToRad(33)}
            maxPolarAngle={MathUtils.degToRad(69)}
        />
    );

}

export default Controlls;
