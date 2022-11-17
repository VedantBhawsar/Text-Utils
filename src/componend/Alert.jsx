import React from 'react'

const Alert = (Alert) => {
    console.log(Alert)


    return (
        <div><div className='alert alert-primary' role="alert">
            <strong>{Alert[0]}</strong>
        </div>
        </div>
    )
}

export default Alert