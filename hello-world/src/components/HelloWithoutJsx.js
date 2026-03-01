import React from 'react'


export default function Hello(){
    return React.createElement(
        'div',
        {
            id: 'hello',
            className: 'hello-msg',
        },
        React.createElement(
            'h1',
            null,
            'Hello Im without Jsx'
        )
    )
}

