import * as THREE from 'three';

const createLoaders = (textures) => {
    return textures.map(t => new Promise(function(resolve, reject) {
        new THREE.TextureLoader().load(t, (t) => resolve(t), () => {}, (e) => reject(reject));
    }));
};

export default createLoaders;
