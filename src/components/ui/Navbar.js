import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <a className="navbar-brand">
                Angel
            </a>
            <button className="btn btn-outline-danger">
                <i className="fa fa-sign-out-alt" />
                <span> Salir</span>
            </button>
        </div>
    )
}
