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
        initPosition: [10, 28, 20]
    }
};

const GlobalState = createGlobalState(initialState);

export default GlobalState;

export const { useGlobalState } = GlobalState;
