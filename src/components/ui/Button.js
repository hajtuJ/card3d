import React from 'react'
import classNames from 'classnames'

const Button = ({bg, label, active, bgColor, onClick = () => {}}) => {

    return (
        <div 
            className={classNames('btn shadow-lg rounded-lg unselectable', {active: active})}
            onClick={onClick}
            style={{ background: `linear-gradient(to top, ${bgColor[0]} 0%, ${bgColor[1]} 100%)` }}
        >
            { label }
        </div>
    );
}

export default Button
