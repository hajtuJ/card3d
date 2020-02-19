import React, { useRef } from 'react'
import { useThree, useFrame, extend } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls });

const Controlls = () => {

    const { camera, gl } = useThree();
    const orbitRef = useRef(null);

    useFrame(() => {
        if (orbitRef && orbitRef.current) {
            orbitRef.current.update();
        }
    });

    return (
        <orbitControls
            ref={orbitRef}
            args={[camera, gl.domElement]}
        />
    );

}

export default Controlls;
