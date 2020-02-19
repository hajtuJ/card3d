import React, { Suspense } from 'react'
import Composition from './Composition'
import Floor from './elements/scene/floor/Floor'
import A5Card from './elements/product/A5Card'
// import Loader from './Loader'

const CompositionContainer = () => {
    return (
            <Composition>
                <Suspense fallback={null}>
                    <Floor />
                    <A5Card />
                </Suspense>
            </Composition>
    )
}

export default CompositionContainer
