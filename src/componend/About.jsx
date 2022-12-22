import React from 'react'
import AboutUs from './img/AboutUs.png'

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col" style={{ margin: ' 40px', marginRight: ' 10px', marginBottom: '10px' }}>
                    <h2 className='fw-bold'>TextUtils</h2>
                    <p style={{ fontWeight: "580" }} >A very handy text tool where you can change between lower case and upper case letters, where you can capitalize and copy text to clipboard</p>
                    <p></p>
                </div>
                <div className="col">
                    <img src={AboutUs} alt="" style={{ width: '100%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default About