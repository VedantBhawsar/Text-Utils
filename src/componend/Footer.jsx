import React from 'react'

const Footer = (props) => {
    return (
        <div className='p-1 text-center border border-dark mt-4' style={{ color: props.dark === 'light' ? 'black' : 'white' }} >
            <p className='mt-2'>
                Copyright © 2012-2022 by Vedant Bhawsar With ❤️. All Rights Reserved.
            </p>
        </div>
    )
}

export default Footer