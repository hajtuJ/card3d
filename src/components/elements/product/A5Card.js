import React from 'react'
import Decoration from './Decoration'
import Paper from './Paper'
import GlobalState from './../../../state/GlobalState'

const A5Card = () => {

    const { useGlobalState } = GlobalState;
    const [, setTouchingProduct] = useGlobalState('touchingProduct');
    const [product] = useGlobalState('product');

    const touchingHandler = (touching = false) => setTouchingProduct(touching);

    return (
        <group
            onPointerLeave={() => touchingHandler()}
            onPointerEnter={() => touchingHandler(true)}

            rotation={product.rotate}
            position={[0, product.height/2 -.6, 0]}
            castShadow
            receiveShadow
        >
            <Paper {...product} />
            <Decoration  {...product} />
        </group>
    );
}

export default A5Card;