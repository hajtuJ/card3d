import React from 'react'
import { useGlobalState } from '../../state/GlobalState'
import Button from './Button';

const UIContainer = () => {

    const [decors] = useGlobalState('decors');
    const [decor, setDecor] = useGlobalState('decor');
    const isActive = (currName) => decor.name === currName;

    return (
        <div className="ui-colors">
            {
                decors.map(d => (
                    <Button 
                        key={d.name} 
                        label={d.name}
                        bgColor={[d.color, d.metalnessColor]} 
                        active={isActive(d.name)} 
                        onClick={() => setDecor(d)} 
                    />
                ))
            }
        </div>
    )
}

export default UIContainer
