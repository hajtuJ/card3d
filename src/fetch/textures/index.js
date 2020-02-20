import { fetchDecorTextures } from './fetchDecorTextures';
import { fetchFloorTextures } from './fetchFloorTextures';
import { fetchPaperTextures } from './fetchPaperTextures';

export default {
    decor: fetchDecorTextures,
    floor: fetchFloorTextures,
    paper: fetchPaperTextures
};