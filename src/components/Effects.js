// import * as THREE from 'three'
// import React, { useRef, useMemo, useEffect } from 'react'
// import { extend, useThree, useFrame } from 'react-three-fiber'
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { BokehShader, BokehDepthShader } from 'three/examples/jsm/shaders/BokehShader2.js';

// extend({ EffectComposer, ShaderPass, RenderPass, BokehShader, BokehDepthShader })

// export default function Effects() {
//   const composer = useRef()

//   const { scene, gl, size, camera } = useThree()
//   const [test] = useMemo(() => {
//         new ShaderPass();
//   }, []);

//   useEffect(() => void composer.current.setSize(size.width, size.height), [size])
//   useFrame(() => composer.current.render(), 1)
//   return (
//     <effectComposer ref={composer} args={[gl]}>
//         <BokehShader args={[]} fstop={} />
//     </effectComposer>
//   )
// }
export default () => {}; 