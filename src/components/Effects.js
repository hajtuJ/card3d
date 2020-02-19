import React, { useRef, useEffect } from 'react'
import { extend, useThree, useFrame} from 'react-three-fiber'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { HorizontalTiltShiftShader } from 'three/examples/jsm/shaders/HorizontalTiltShiftShader'
import HTSShader from './effects/HTSShader'

extend({ EffectComposer, ShaderPass, RenderPass, HorizontalTiltShiftShader });

const Effects = () => {

    const composer = useRef(null)
    const { scene, gl, size, camera } = useThree()

    useEffect(() => void composer.current.setSize(size.width, size.height), [size])

    useFrame(() => {
        composer.current.render();
    }, 1);

    return (
        <effectComposer ref={composer} args={[gl]}>
            <renderPass attachArray="passes" scene={scene} camera={camera} />
            <HTSShader effectComposerRef={composer} />
        </effectComposer>
    );
}

export default Effects; 