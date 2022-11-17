import React from 'react'

const Alert = (Alert) => {
    console.log(Alert);
    // console.log(Alertcolor)
    // let clase = "alert alert" + { Alertcolor }
    return (
        <div><div className='' role="alert">
            <strong>{Alert}</strong>
        </div>
        </div>
    )
}

export default Alert