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
    }
};

const GlobalState = createGlobalState(initialState);

export default GlobalState;

export const { useGlobalState } = GlobalState;
