import './App.css';
import React from 'react';
import CompositionContainer from './components/CompositionContainer';
import UIContainer from './components/ui/UIContainer';
import fetch from './fetch/textures'
import Loader from './components/Loader';
import useLoaderTextures from './components/hooks/useLoaderTextures';

function App() {

	const [loading] = useLoaderTextures(fetch);

	return (
		<Loader 
			isLoading={loading} 
			render={() => (
				<>
					<UIContainer />
					<CompositionContainer />
				</>
			)}
		/>
	);
}

export default App;
