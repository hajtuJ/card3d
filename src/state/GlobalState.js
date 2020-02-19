import * as THREE from 'three'
import { createGlobalState } from 'react-hooks-global-state'
import * as DECORS from './decors';
 
const initialState = { 
    product: {
        width: 14.8,
        height: 21.0,
        textRepeat: 6,
        rotate: [THREE.MathUtils.degToRad(-20), 0, 0]
    },
    touchingProduct: false,
    decors: [DECORS.GOLD, DECORS.SILVER, DECORS.COPPER],
    decor: DECORS.GOLD,
    camera: {
        init: {
            position: new THREE.Vector3(10, 28, 25),
            lookAt: new THREE.Vector3(0,10,0),
            rotate: [THREE.MathUtils.degToRad(0), 0, 0]
        }
    },
    scene: {
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
                shadowMapWidth: 512,
                shadowMapHeight: 512
            }
        }
    },
    loading: true,
    textures: {
        floor: [],
        paper: [],
        decor: []
    }
};

const GlobalState = createGlobalState(initialState);

export default GlobalState;

export const { useGlobalState } = GlobalState;
