import { useEffect, useState } from 'react';
import { useGlobalState } from '../state/GlobalState';

export default (texturesCalls = []) => {

const [texturesInit] = useGlobalState('textures');
    
    const [setLoading] = useGlobalState('loading');
    const [textures, setTextures] = useState(texturesInit);

    useEffect(() => {
        Promise.all(texturesCalls).then(r => {
            setTextures({
                ...texturesInit,
                floor: r[0]
            })
        }).finally(() => setLoading(false));
    }, [])

    return textures;
}