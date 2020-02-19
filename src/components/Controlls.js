import React, { useRef } from 'react';
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

extend({ OrbitControls });

const Controlls = () => {

    const { camera, gl } = useThree();
    const orbitRef = useRef(null);

    useFrame(() => {
        if (orbitRef && orbitRef.current) {
            orbitRef.current.update();
            console.log(orbitRef.current);
            camera.lookAt(0,10,0);
        }
    });

    return (
        <orbitControls
            ref={orbitRef}
            args={[camera, gl.domElement]}
            autoRotate
            autoRotateSpeed={.6}
            enableZoom={false}
            enablePan={false}
            enableKeys={false}
            maxAzimuthAngle={.3}
            minAzimuthAngle={-.3}
            minPolarAngle={.5}
            maxPolarAngle={1.1}
        />
    );

}

export default Controlls;
