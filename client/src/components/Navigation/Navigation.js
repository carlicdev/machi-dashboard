import React from 'react'

const Navigation = () => {
    return (
        <div className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
            <p className='navbar-brand col-md-3 col-lg-2 mr-0 px-3'>Machi</p>
            <button className="navbar-toggler  d-md-none collapsed ml-auto" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    )
}

export default Navigation
