import React from 'react'

const Alert = (props) => {
    return (
        <div>
            {props.alert === undefined ? <div></div> :
                <div className={`alert alert-${props.alert.type} fade show `} role="alert">
                    <strong>{props.alert.msg}</strong>
                </div>
            }
        </div>
    )
}

export default Alert