import texturePath from "../helpers/texturePath";
import createLoaders from "../helpers/createLoaders";

export const fetchFloorTextures = () => Promise.all(
    createLoaders([ 
        texturePath('envMap', 'jpg'), 
        texturePath('floor/concrete') 
    ])
);