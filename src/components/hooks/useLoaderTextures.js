import { useEffect } from 'react';
import { useGlobalState } from './../../state/GlobalState';

export default (texturesCalls) => {

    const [,setTextures] = useGlobalState('textures');
    const [loading, setLoading] = useGlobalState('loading');

    useEffect(() => {
        
        //begin fetch
        const fetches = Object.values(texturesCalls).map(fetch => fetch());

        Promise
            .all(fetches)
            .then(
                (r) => {
                    //create state from result
                    const callsKeys = Object.keys(texturesCalls);
                    const collectingPairsOfLabelsAndResults = callsKeys.map((callKey, i) => [callKey, r[i]])
                    const fetchState = Object.fromEntries(collectingPairsOfLabelsAndResults);
                    setTextures(fetchState);
                })
            .finally(() => setLoading(false));

    }, [texturesCalls, setLoading, setTextures]);
    
    return [loading];

}
