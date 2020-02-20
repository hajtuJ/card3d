import React from 'react'
import Composition from './Composition'
import Floor from './elements/scene/floor/Floor'
import A5Card from './elements/product/A5Card'
// import Loader from './Loader'

const CompositionContainer = () => {
    return (
            <Composition>
                <Floor />
                <A5Card />
            </Composition>
    )
}

export default CompositionContainer
