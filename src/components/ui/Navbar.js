import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <p className="navbar-brand">
                Angel
            </p>
            <button className="btn btn-outline-danger">
                <i className="fa fa-sign-out-alt" />
                <span> Salir</span>
            </button>
        </div>
    )
}
