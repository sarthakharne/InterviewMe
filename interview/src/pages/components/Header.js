import React from 'react'
import {Link} from "react-router-dom"
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    INTER![VIEW]
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <Link to = "/" className="nav-link">
                        Home
                    </Link>
                    <Link to = "/Meetings" className="nav-link" >
                        Meetings
                    </Link>
                    
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

