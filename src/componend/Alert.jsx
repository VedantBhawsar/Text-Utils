import React from 'react'

const Alert = (props) => {

    console.log(props.alertcolor)

    return (
        <div>
            <div className={`alert alert-${props.alertcolor} alert-dismissible fade show`} role="alert">
                <strong>{props.alert}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">

                </button>
            </div>
        </div>
    )
}

export default Alert