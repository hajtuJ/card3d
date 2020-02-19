import React, { useRef, useCallback, useState } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MathUtils } from 'three';
import { useGlobalState } from './../state/GlobalState'

extend({ OrbitControls });

const Controlls = () => {

    const [touchingProduct] = useGlobalState('touchingProduct')

    const { camera, gl } = useThree();
    const orbitRef = useRef(null);

    const [pos, setPos] = useState(10);
    let speed = .004,
    centerX = 0,
    posToAnime = 10;

    const countCameraPos = useCallback( 
        () => {
            const newpos = pos + speed;
            setPos(newpos);
            return centerX + (Math.sin(newpos) * posToAnime)
        },
        [posToAnime, centerX, pos, speed]
    );

    useFrame(() => {
        if (orbitRef && orbitRef.current) {
            orbitRef.current.update();
            camera.lookAt(0,12,0);
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
