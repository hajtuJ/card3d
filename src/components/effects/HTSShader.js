import React, { useEffect, useCallback } from 'react'
import * as THREE from 'three'
import { useThree, extend, useLoader, useFrame } from 'react-three-fiber'
import texturePath from './../../helpers/texturePath'
import { HorizontalTiltShiftShader } from 'three/examples/jsm/shaders/HorizontalTiltShiftShader'

extend({ HorizontalTiltShiftShader });

const HTSShader = ({ effectComposerRef }) => {

    const { size, camera } = useThree();

    useEffect(() => void effectComposerRef.current.setSize(size.width, size.height), [size, effectComposerRef])

    useFrame(() => {
        effectComposerRef.current.passes[1].uniforms.r.value = HSRValue();
    }, [camera.rotation.x]);

    const HSRValue = useCallback(() => ( Math.abs(camera.rotation.x)), [camera.rotation.x])
    const diffuse = useLoader(THREE.TextureLoader, texturePath('blur-diffuse'));

    return (
        <shaderPass 
            attachArray="passes" 
            args={[HorizontalTiltShiftShader]} 
            uniforms-h-value={.0012}
            uniforms-tDiffuse-value={diffuse}
            renderToScreen
        />
    );
}

export default HTSShader
