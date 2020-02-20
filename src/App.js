import './App.css';
import React, { useEffect } from 'react';
import CompositionContainer from './components/CompositionContainer';
import UIContainer from './components/ui/UIContainer';
import fetch from './fetch'
import { useGlobalState } from './state/GlobalState';
import Loader from './components/Loader';

function App() {

	const [,setTextures] = useGlobalState('textures');
    const [loading, setLoading] = useGlobalState('loading');

    useEffect(() => {
        Promise.all([
			fetch.fetchFloorTextures(),
			fetch.fetchPaperTextures(),
			fetch.fetchDecorTextures()
		]).then(
			([floor, paper, decor]) => {
				console.log(floor, paper, decor);
            	setTextures({floor: floor, paper: paper, decor: decor});
        }).finally(
			() => setLoading(false)
		);
	}, [setTextures, setLoading]);

	return (
		loading ? (
			<Loader />
		) : (
			<>
				<UIContainer />
				<CompositionContainer />
			</>
		)
	);

}

export default App;
