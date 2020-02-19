import React, { useRef } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MathUtils } from 'three';

extend({ OrbitControls });

const Controlls = () => {

    const { camera, gl } = useThree();
    const orbitRef = useRef(null);

    useFrame(() => {
        if (orbitRef && orbitRef.current) {
            orbitRef.current.update();
            camera.lookAt(0,10,0);
        }
    });

    return (
        <orbitControls
            ref={orbitRef}
            args={[camera, gl.domElement]}
            autoRotate
            autoRotateSpeed={.4}
            enableZoom={false}
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
