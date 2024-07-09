import React from 'react';

function Button(props) {
    return (
        <button
            type={props.type}
            className='btn btn-primary'
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
