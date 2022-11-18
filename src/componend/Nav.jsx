import React, { useState } from 'react'

const Nav = (props) => {



    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.dark} bg-${props.dark}`}  >
                <div className="container-fluid">
                    <strong>
                        <a className="navbar-brand">TextUtils</a>
                    </strong>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" >Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current='page'   >About TextUtils</a>
                            </li>
                        </ul>

                        <div className="form-check form-switch mx-3">
                            <input className="form-check-input" type="checkbox" onFocus={props.Dark_mode} />
                            <label className={`form-check-label text-${props.dark === 'dark' ? 'white' : 'black'}`}  >{props.labdark}</label>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: props.dark === 'light' ? 'white' : '#343a40', color: props.dark === 'light' ? 'black' : 'white' }} />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Nav