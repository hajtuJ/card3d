import texturePath from "../../helpers/texturePath";
import createLoaders from "../../helpers/createLoaders";

export const fetchPaperTextures = () => Promise.all(
    createLoaders([ 
        texturePath('a5card/preview-3LxCdL9GFrg-cmyk') 
    ])
);