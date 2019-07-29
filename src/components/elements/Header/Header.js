import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                    <img className="rmbd-logo" src="./images/kissclipart-clip-art-popcorn-clipart-popcorn-clip-art-9caefa6bbd74377e.png" alt="rmbd-logo" />
                </Link>
                <h1 className="rmdb-header-title">Groovy Movies</h1>
                <img className="rmbd-tmdb-logo" src="./images/tmdb_logo.png" alt="tmdb-logo" />
            </div>
        </div>
    )
}

export default Header;