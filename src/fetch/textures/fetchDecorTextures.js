import texturePath from "../../helpers/texturePath";
import createLoaders from "../../helpers/createLoaders";

export const fetchDecorTextures = () => Promise.all(
    createLoaders([
        texturePath('gold/noise'),
        texturePath('gold/preview-3LxCdL9GFrg-foil'),
        texturePath('gold/preview-3LxCdL9GFrg-height'),
        texturePath('envMap', 'jpg')
    ])
);
